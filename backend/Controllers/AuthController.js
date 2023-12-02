import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import AuthModel from "../Models/auth.js";
import UserModel from "../Models/user.js";

class AuthController {
    constructor(){
        this.authModel = new AuthModel;
        this.userModel = new UserModel
    }

    login = async (req, res) => {
        try {
            const { identifiant, password } = req.body;
            if(!identifiant || !password){
                // console.log("user absent or password is undefined");
                return res.status(401).json({error: "Authentification échouée"});
               }
            const isUser = await this.userModel.loginUser(identifiant);
            // console.log("auth controller", isUser);
            if(!isUser){
                // console.log("user absent");
                return res.status(401).json({error: "Authentification échouée"});
            }
            // console.log(password, isUser.password);
            const passwordMatch = await bcrypt.compare(password, isUser.password);
            if(!passwordMatch){
                // console.log("no match password");
                return res.status(401).json({error: "Authentification échouée"});
            }
            const token = jwt.sign({ userID : isUser.id}, process.env.JWT_SECRET , {expiresIn : process.env.JWT_SECRET_EXPIRE})
            res.status(200).json({token, userID : isUser.id})
        } catch (error) {
            res.status(500).json({error : "La connection a échouée",
        message : error.message});
        }
    };

    logout = async (req, res) => {res.json({message:'AuthController.logout in controller'})};
}

export default AuthController;