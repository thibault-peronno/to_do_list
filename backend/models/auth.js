import connectDB from "../config/db.js";
import AuthService from "../Services/authService.js";

class AuthModel {
    constructor(){
        this.authService = new AuthService;
        console.log(this.authEntity);
    }

}

export default AuthModel;