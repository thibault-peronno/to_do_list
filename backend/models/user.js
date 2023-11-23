import connectDB from "../config/db.js";
import UserService from "../Services/userService.js";

// connectDB();
console.log("connectDB model : " + connectDB);

class UserModel {
  constructor() {
    this.userService = new UserService;
  }

  findCurrentUser = async (userId) => {
    try {
      // return {message : 'test'};
      console.log("model id : " + userId);
      const [user] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `lastname`, `firstname`, `identifiant` FROM `users` WHERE id = ? ",
          [userId]
        );
      console.log("14 : " + JSON.stringify(user));
      
      return user;
    } catch (error) {
      // return `utilisateur introuvable: ${error.message}, ${error}`;
      throw new Error(`utilisateur introuvable: ${error}`);
    }
  };

  createNewUser = async (newUserValue)=>{
    try{
      const checkValidation = await this.userService.validateUser(newUserValue);
      console.log('newUserValue ' + typeof newUserValue);
      console.log('checkValidation ' + typeof checkValidation);
      const { firstname, lastname, identifiant, password } = JSON.parse(newUserValue);
      const result = await connectDB
      .promise()
      .query("INSERT INTO `users` (firstname, lastname, identifiant, password) values (?,?,?,?)", [firstname, lastname, identifiant, password]);
      return {id: result.id, firstname, lastname, identifiant};
    }catch(error){
      console.log('error user model ' + error);
      return error;
    }
  }
}

export default UserModel;
