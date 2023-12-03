import connectDB from "../config/db.js";
import AuthService from "../Services/authService.js";

class AuthModel {
    constructor(){
        this.authService = new AuthService;
        console.log(this.authEntity);
    }

    loginUser = async (emailValue) => {
        try {
          const [user] = await connectDB
          .promise()
          .query("SELECT `id`, `password` FROM `users` WHERE identifiant = ?", [emailValue]);
          console.log("model user" , user);
          return user[0];
        } catch (error) {
          console.log('error loginUser');
          return error.message;
        }
      }
}

export default AuthModel;