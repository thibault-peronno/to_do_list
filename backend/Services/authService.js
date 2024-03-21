import AuthEntity from "../Entities/authEntity.js";
import Joi from "joi";
import bcrypt from "bcrypt";

class AuthService {
  constructor() {
    this.authEntity = new AuthEntity();
  }

  validationRegister = async (registerValue, createMod) => {
    const registerSchema = Joi.object({
      firstname: Joi.string().required().messages({
        "any.required": "Votre prénom est obligatoire",
        "string.base": "Votre prénom doit être une chaine de caractère",
        "string.empty": "Votre prénom est obligatoire",
      }),
      lastname: Joi.string()
        .required()
        .messages({
          "any.required": "Votre nom est obligatoire",
          "string.base": "Votre nom doit être une chaine de caractère",
          "string.empty": "Votre nom est obligatoire",
        }),
      identifiant: Joi.string()
        .email()
        .required()
        .messages({
          "any.required": "Votre identifiant est obligatoire",
          "string.email": "Votre identifiant doit être un email valide",
          "string.empty": "Veuillez renseigner un email",
        }),
      password: Joi.string().required().min(13).messages({
        "any.required": "password : Votre mot de passe est obligatoire",
        "string.min": "Votre mot de passe doit contenir 13 caractères minimum",
        "string.empty": "Veuillez renseigner un mot de passe de 13 caractères minimum",
      }),
    });
    // .xor('password', 'access_token') allow to switch check between password and access_token
    const {error} = await registerSchema.validate
(registerValue, { abortEarly: false });
    if (error) {
      throw error;
      return error;
    }
    return registerValue;
  };

  ValidationLogin = async (loginValue, createMod) => {
    const loginSchema = Joi.object({
      identifiant: Joi.string()
        .email()
        .required()
        .messages({
          "any.required": "Votre identifiant est obligatoire",
          "string.email": "Votre identifiant doit être un email valide",
        }),
      password: Joi.string().required().min(13).messages({
        "any.required": "password : Votre mot de passe est obligatoire",
        "string.min": "Votre mot de passe doit contenir 13 caractères minimum",
      }),
    });
    // .xor('password', 'access_token') allow to switch check between password and access_token
    const { error } = await loginSchema.validate
(loginValue, { abortEarly: false });
    if (error) {
      return error;
    }
    return loginValue;
  };

  hashPassword = async (passwordValue) => {
    try {
      const hashedPassword = await bcrypt.hash(passwordValue, 10);
      return hashedPassword;
      
    } catch (error) {
      return error;
    }
  };

  comparePassword = async (password, userPassword) => {
    try {
      const passwordMatch = await bcrypt.compare(password, userPassword);
      console.log(password, userPassword);
      return passwordMatch
    } catch (error) {
      return { error: "Erreur lors de la comparaison des mots de passe :", message: error };
    }
  }
}

export default AuthService;
