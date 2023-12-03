import AuthEntity from "../Entities/authEntity.js";
import Joi from "joi";

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
        }),
      password: Joi.string().required().min(13).messages({
        "any.required": "password : Votre mot de passe est obligatoire",
        "string.min": "Votre mot de passe doit contenir 13 caractères minimum",
      }),
    });
    // .xor('password', 'access_token') allow to switch check between password and access_token
    const { error } = await registerSchema.validateAsync(registerValue, { abortEarly: false });
    if (error) {
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
    const { error } = await loginSchema.validateAsync(loginValue, { abortEarly: false });
    if (error) {
      return error;
    }
    return loginValue;
  };
}

export default AuthService;
