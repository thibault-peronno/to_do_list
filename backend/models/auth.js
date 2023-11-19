import connectDB from "../config/db.js";
import AuthEntity from "../Entities/authentity.js";

class AuthModel {
    constructor(){
        this.authEntity = new AuthEntity;
        console.log(this.authEntity);
    }

}

export default AuthModel;