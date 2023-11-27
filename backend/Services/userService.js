import UserEntity from "../Entities/userEntity.js";
import Joi from 'joi';

// const JoiWithHtmlInput = Joi.extend(htmlInput);


class UserService {
  constructor() {
    this.userEntity = new UserEntity();
  }

  validateNewUser = async (userValue, createMod) => {
    // console.log('validateUser service : ');
    // console.log(userValue);
    const userSchema = Joi.object({
      firstname : Joi.string().required(),
      lastname : Joi.string().required(),
      identifiant : Joi.string().email(),
      password : Joi.string().required(),
    })
    // .xor('password', 'access_token') allow to switch check between password and access_token
 
      const { error } = await userSchema.validateAsync(userValue);

      if (error) {
        return {message : error + 'retour erreur du user service'};
       
    }
    return userValue;   
    
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

}

export default UserService;
