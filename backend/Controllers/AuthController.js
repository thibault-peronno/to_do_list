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
      const registeredUser = await this.authModel.registerNewUser(body);
      return res.status(201).json({
        message: "Votre compte est créé",
        registeredUser,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  login = async (req, res) => {
    try {
        await this.authService.ValidationLogin(req.body);
      const { identifiant, password } = req.body;
      if (!identifiant || !password) {
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const isUser = await this.authModel.loginUser(identifiant);
      console.log('isUser', isUser);
      if (!isUser) {
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const passwordMatch = await bcrypt.compare(password, isUser.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const token = jwt.sign({ userID: isUser.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRE,
      });
      //in production mode, change secure by true and add domain option.
      res.cookie("auth_cookies", token, { httpOnly: true, secure: false });
      res.status(200).json({ userID: isUser.id, name:isUser.firstname, lastname: isUser.lastname, email: isUser.identifiant });
    } catch (error) {
      res
        .status(500)
        .json({ error: "La connection a échouée", message: error });
    }
  };

  logout = async (req, res) => {
    return res.clearCookie("auth_token").sendStatus(200);
  };
}

export default AuthController;
