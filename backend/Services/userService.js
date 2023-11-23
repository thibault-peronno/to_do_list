import UserEntity from "../Entities/userEntity.js";
import Joi from 'joi';

// const JoiWithHtmlInput = Joi.extend(htmlInput);


class UserService {
  constructor() {
    this.userEntity = new UserEntity();
  }

  validateUser = async (userValue, createMod) => {
    console.log('validateUser service : ' + userValue);
    const userSchema = Joi.object({
      firstname : Joi.string().required(),
      lastname : Joi.string(),
      identifiant : Joi.string().email(),
      password : Joi.string(),
    })
    // .xor('password', 'access_token') allow to switch check between password and access_token
    
      console.log('uservalue ' + userValue);
      
      this.userEntity._firstname = userValue.firstname;
      this.userEntity._lastname = userValue.lastname;
      this.userEntity._identifiant = userValue.identifiant;
      this.userEntity._password = userValue.password;
      console.log('this.userEntity ' +  typeof this.userEntity);

      const test = {
        firstname : 'test firstname',
        lastname : 'test lastname',
        identifiant : 'test_identifiant@gmail.com',
        password : 'test password'
      } 
      console.log('test ' + typeof test);
      const { error } = await userSchema.validateAsync(test);

      if (error) {
        console.log('error' + error);
        return {message : error + 'retour du user service'};
       
    }
    return userValue;   
    
  }

}

export default UserService;
