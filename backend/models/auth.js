import connectDB from "../config/db.js";
import AuthService from "../Services/authService.js";

class AuthModel {
    constructor(){
        this.authService = new AuthService();
    }

    registerNewUser = async (newUserValue)=>{
      try{
        const { firstname, lastname, identifiant } = newUserValue;
        const checkEmail = await this.checkIsEmailExist(identifiant)
        if(checkEmail){
          return {emailExist : true, message: "L'email existe déjà"}
        }
        let { password } = newUserValue;
        const hashedPassword = await this.authService.hashPassword(password);
        password = hashedPassword;
        const result = await connectDB
        .promise()
        .query("INSERT INTO `users` (firstname, lastname, identifiant, password) VALUES (?,?,?,?)", [firstname, lastname, identifiant, password]);
        return result;
      }catch(error){
        return error;
      }
    }

    checkIsEmailExist = async (email) =>{
      const result = await connectDB
      .promise()
      .query('SELECT `identifiant` FROM `users` WHERE identifiant=?', [email]);
      if(result[0].length == 0){
        return false
      }
      return true
    }

    loginUser = async (emailValue) => {
        try {
          const [user] = await connectDB
          .promise()
          .query("SELECT `id`, `password`, `lastname`, `firstname`, `identifiant` FROM `users` WHERE identifiant = ?", [emailValue]);
          return user[0];
        } catch (error) {
          return error.message;
        }
      }
}

export default AuthModel;