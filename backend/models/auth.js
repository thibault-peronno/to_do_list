import connectDB from "../config/db.js";
import AuthService from "../Services/authService.js";

class AuthModel {
    constructor(){
        this.authService = new AuthService;
        // console.log(this.authEntity);
    }

    registerNewUser = async (newUserValue)=>{
      try{
        const { firstname, lastname, identifiant } = newUserValue;
        let { password } = newUserValue;
        const hashedPassword = await this.userService.hashPassword(password);
        password = hashedPassword;
        const result = await connectDB
        .promise()
        .query("INSERT INTO `users` (firstname, lastname, identifiant, password) VALUES (?,?,?,?)", [firstname, lastname, identifiant, password]);
        return { id: result.id, firstname, lastname, identifiant };
      }catch(error){
        console.log('erreur register user');
        return error;
      }
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