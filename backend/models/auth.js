import connectDB from "../config/db.js";
import AuthService from "../Services/authService.js";

class AuthModel {
    constructor(){
        this.authService = new AuthService();
        // console.log(this.authEntity);
    }

    registerNewUser = async (newUserValue)=>{
      console.log('model auth', newUserValue);
      try{
        const { firstname, lastname, identifiant } = newUserValue;
        const checkEmail = await this.checkIsEmailExist(identifiant)
        if(checkEmail){
          return {emailExist : true, message: "L'email existe déjà"}
        }
        let { password } = newUserValue;
        console.log('password', password);
        const hashedPassword = await this.authService.hashPassword(password);
        console.log('hashed', hashedPassword);
        password = hashedPassword;
        const result = await connectDB
        .promise()
        .query("INSERT INTO `users` (firstname, lastname, identifiant, password) VALUES (?,?,?,?)", [firstname, lastname, identifiant, password]);
        console.log('result register auth model', result);
        return result;
      }catch(error){
        console.log('erreur register user', error);
        return error;
      }
    }

    checkIsEmailExist = async (email) =>{
      console.log('check email');
      const result = await connectDB
      .promise()
      .query('SELECT `identifiant` FROM `users` WHERE identifiant=?', [email]);
      console.log(result);
      if(result[0].length == 0){
        console.log(result[0]);
        return false
      }
      console.log(result[0]);
      return true

    }

    loginUser = async (emailValue) => {
        try {
          const [user] = await connectDB
          .promise()
          .query("SELECT `id`, `password`, `lastname`, `firstname`, `identifiant` FROM `users` WHERE identifiant = ?", [emailValue]);
          console.log("model user" , user);
          return user[0];
        } catch (error) {
          console.log('error loginUser');
          return error.message;
        }
      }
}

export default AuthModel;