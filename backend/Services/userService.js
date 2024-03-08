import UserEntity from "../Entities/userEntity.js";
import Joi from "joi";

class UserService {
  constructor() {
    this.userEntity = new UserEntity();
  }

  validateUpdateUser = async (userValue, createMod) => {
    const userSchema = Joi.object({
      id: Joi.number().required().messages({
        "any.required": "L'id utilisateur est obligatoire",
        "number.base": "la valeur doit être un nombre",
      }),
      firstname: Joi.string().required().messages({
        "string.base": "Votre prénom doit être renseigné",
        "string.empty": "Votre prénom est obligatoire",
      }),
      lastname: Joi.string().required().messages({
        "string.base": "Votre nom doit être renseigné",
        "string.empty": "Votre nom est obligatoire",
      }),
      identifiant: Joi.string().email().messages({
        "string.email": "Votre identifiant doit être un email valide",
      }),
    });
    console.trace();
    const { error } = await userSchema.validate
(userValue, { abortEarly: false });
    if (error) {
      throw error;
    }
    return userValue;
  };

  validateDeleteUser = async (userValue, createMod) => {
    const userSchema = Joi.object({
      id: Joi.number().required().messages({
        "any.required": "L'id utilisateur est obligatoire",
        "number.base": "la valeur doit être un nombre",
      }),
    });
    const { error } = await userSchema.validate
(userValue, { abortEarly: false });
    if (error) {
      return error;
    }
    return uservalue;
  };
}

export default UserService;
