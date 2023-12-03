import AuthEntity from "../Entities/authEntity.js";
import Joi from "joi";

class AuthService {
  constructor() {
    this.authEntity = new AuthEntity();
  }

  validationRegister = async (userValue, createMod) => {
    const userSchema = Joi.object({
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
    const { error } = await userSchema.validateAsync(userValue, { abortEarly: false });
    if (error) {
      return error;
    }
    return userValue;
  };
}

export default AuthService;
