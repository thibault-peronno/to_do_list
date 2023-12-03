import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AuthModel from "../Models/auth.js";
import UserModel from "../Models/user.js";
import AuthService from "../Services/authService.js";

class AuthController {
  constructor() {
    this.authModel = new AuthModel();
    this.userModel = new UserModel();
    this.authService = new AuthService();
  }

  /**
   *
   * @param {
   * "firstname" ,
   * "lastname",
   * "identifiant",
   * "password"} req
   * @param {
   * "firstname",
   * "lastname",
   * "identifiant"} res
   */
  registerUser = async (req, res) => {
    const body = req.body;
    try {
      await this.authService.validationRegister(body);
      const registeredUser = await this.userModel.registerNewUser(body);
      return res.status(201).json({
        message: "Votre compte est créé",
        registeredUser,
      });
    } catch (error) {
      console.log("erreur register user", error);
      return res.status(500).json({ error });
    }
  };

  login = async (req, res) => {
    try {
      const { identifiant, password } = req.body;
      if (!identifiant || !password) {
        // console.log("user absent or password is undefined");
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const isUser = await this.authModel.loginUser(identifiant);
      // console.log("auth controller", isUser);
      if (!isUser) {
        // console.log("user absent");
        return res.status(401).json({ error: "Authentification échouée" });
      }
      // console.log(password, isUser.password);
      const passwordMatch = await bcrypt.compare(password, isUser.password);
      if (!passwordMatch) {
        // console.log("no match password");
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const token = jwt.sign({ userID: isUser.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRE,
      });
      //in production mode, change secure by true and add domain option.
      res.cookie("auth_cookies", token, { httpOnly: true, secure: false });
      // res.status(200).json({token, userID : isUser.id})
      res.status(200).json({ userID: isUser.id });
    } catch (error) {
      res
        .status(500)
        .json({ error: "La connection a échouée", message: error.message });
    }
  };

  logout = async (req, res) => {
    return res.clearCookie("auth_token").sendStatus(200);
  };
}

export default AuthController;
