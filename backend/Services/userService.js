import UserEntity from "../Entities/userEntity.js";
import Joi from 'joi';
import bcrypt from 'bcrypt';

// const JoiWithHtmlInput = Joi.extend(htmlInput);


class UserService {
  constructor() {
    this.userEntity = new UserEntity();
  }

  validateUpdateUser = async (userValue, createMod) => {
    const userSchema = Joi.object({
      id: Joi.number(),
      firstname : Joi.string(),
      lastname : Joi.string(),
      identifiant : Joi.string(),
      role : Joi.string()
    })
    const { error, value } = await userSchema.validateAsync(userValue);
    console.log("value", value);

    return error ? {message : error + 'retour erreur du user service'}: userValue;
  }

  validateDeleteUser = async (userValue, createMod) => {
    const userSchema = Joi.object({
      id: Joi.number()
    });
    const { error, value } = await userSchema.validateAsync(userValue);
    console.log("value", value);
    console.log("error", error);

    return error ? {message : error + 'retour erreur du user service'}: "";
  }

  hashPassword = async (passwordValue) => {
    const hashedPassword = await bcrypt.hash(passwordValue, 10);
    console.log(hashedPassword);
    return hashedPassword;
  }

}

export default UserService;
