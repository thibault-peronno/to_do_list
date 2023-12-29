import UserEntity from "../Entities/userEntity.js";
import Joi from "joi";


// const JoiWithHtmlInput = Joi.extend(htmlInput);

class UserService {
  constructor() {
    this.userEntity = new UserEntity();
  }

  validateUpdateUser = async (userValue, createMod) => {
    // console.log('validation', userValue);
    const userSchema = Joi.object({
      id: Joi.number().required().messages({
        "any.required": "L'id utilisateur est obligatoire",
        "number.base": "la valeur doit être un nombre",
      }),
      firstname: Joi.string().messages({
        "string.base": "Votre nom doit être une chaine de caractère",
      }),
      lastname: Joi.string().messages({
        "string.base": "Votre nom doit être une chaine de caractère",
      }),
      identifiant: Joi.email().messages({
        "string.email": "Votre identifiant doit être un email valide",
      }),
    });
    console.trace();
    // console.log('userSchema', userSchema);
    const { error } = await userSchema.validate
(userValue, { abortEarly: false });
    console.log(error);
    if (error) {
      // console.log('erreru validation', error);
      return error;
    }
    // console.log('return', userValue);
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
