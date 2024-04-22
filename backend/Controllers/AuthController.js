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
    const { body } = req;
    try {
      const errorValidation = await this.authService.validationRegister(body);
      const registeredUser = await this.authModel.registerNewUser(body);
      if (registeredUser.emailExist) {
        return res.status(409).json({ message: registeredUser.message });
      } else if (registeredUser[0].affectedRows == 1) {
        return res.status(201).json({
          message: "Votre compte est créé",
        });
      }
    } catch (error) {
      return res.status(400).json(error);
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
      if (!isUser) {
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const passwordMatch = await this.authService.comparePassword(
        password,
        isUser.password
      );
      if (passwordMatch.error) {
        return res.status(500).json({ error: passwordMatch.error, message: passwordMatch.error });
      }else if(!passwordMatch){
        return res.status(401).json({ error: "La connexion a échoué"});
      }
      const token = jwt.sign({ userID: isUser.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRE,
      });
      //in production mode, change secure by true and add domain option.
      res.cookie("auth_cookies", token, { httpOnly: true, secure: true });
      res.status(200).json({
        id: isUser.id,
        firstname: isUser.firstname,
        lastname: isUser.lastname,
        email: isUser.identifiant,
      });
    } catch (error) {
      // console.log("message d erreur", error.message);
      res
        .status(500)
        .json({ error: "La connection a échouée", message: error });
    }
  };

  loginMobil = async (req, res) => {
    try {
      await this.authService.ValidationLogin(req.body);
      const { identifiant, password } = req.body;
      if (!identifiant || !password) {
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const isUser = await this.authModel.loginUser(identifiant);
      if (!isUser) {
        return res.status(401).json({ error: "Authentification échouée" });
      }
      const passwordMatch = await this.authService.comparePassword(
        password,
        isUser.password
      );
      if (passwordMatch.error) {
        return res.status(500).json({ error: passwordMatch.error, message: passwordMatch.error });
      }else if(!passwordMatch){
        return res.status(401).json({ error: "La connexion a échoué"});
      }
      const token = jwt.sign({ userID: isUser.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRE,
      });
      res.status(200).json({
        id: isUser.id,
        firstname: isUser.firstname,
        lastname: isUser.lastname,
        email: isUser.identifiant,
        token: token,
      });
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
