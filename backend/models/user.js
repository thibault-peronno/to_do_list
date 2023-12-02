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
      // console.log("model id : " + userId);
      const [user] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `lastname`, `firstname`, `identifiant` FROM `users` WHERE id = ? ",
          [userId]
        );
      // console.log("14 : " + JSON.stringify(user));
      
      return user;
    } catch (error) {
      return `utilisateur introuvable: ${error.message}, ${error}`;
      // throw new Error(`utilisateur introuvable: ${error}`);
    }
  };

  createNewUser = async (newUserValue)=>{
    try{
      const checkValidation = await this.userService.validateNewUser(newUserValue);
      // console.log('checkValidation : ');
      // console.log(checkValidation);
      const { firstname, lastname, identifiant, password } = newUserValue;
      const result = await connectDB
      .promise()
      .query("INSERT INTO `users` (firstname, lastname, identifiant, password) VALUES (?,?,?,?)", [firstname, lastname, identifiant, password]);
      return { id: result.id, firstname, lastname, identifiant };
    }catch(error){
      // console.log('error user model ' + error);
      return error;
    }
  }

  updateUser = async (updateUserValue) => {
    try {
      await this.userService.validateUpdateUser(updateUserValue);

      const { firstname, lastname, identifiant, role, id } = updateUserValue;

      const result = await connectDB
      .promise()
      .query("UPDATE `users` SET firstname=?, lastname=?, identifiant=?, role=? WHERE id= ?", [firstname, lastname, identifiant, role, id]);
      // console.log("result", result);

      const updateValue = await this.findCurrentUser(id);
      return updateValue;
    } catch (error) {
      return error;
    }

  }
  deleteUser = async (deleteUserValue) =>{
    console.log("delete user model");
    console.log(deleteUserValue);
    try {
      await this.userService.validateDeleteUser(deleteUserValue);

      const { id } = deleteUserValue;
      const result = await connectDB
      .promise()
      .query("DELETE FROM `users` WHERE id=?", [id]);
      return result;
    } catch (error) {
      return error.messsage;
    }
  }
}

export default UserModel;
