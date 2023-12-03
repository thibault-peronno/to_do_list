import connectDB from "../config/db.js";
import UserService from "../Services/userService.js";

// connectDB();
console.log("connectDB model : " + connectDB);

class UserModel {
  constructor() {
    this.userService = new UserService();
  }

  findCurrentUser = async (userId) => {
    try {
      const [user] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `lastname`, `firstname`, `identifiant` FROM `users` WHERE id = ? ",
          [userId]
        );
      return user;
    } catch (error) {
      return error;
    }
  };

  updateUser = async (updateUserValue) => {
    try {
      const { firstname, lastname, identifiant, role, id } = updateUserValue;
      const result = await connectDB
        .promise()
        .query(
          "UPDATE `users` SET firstname=?, lastname=?, identifiant=?, role=? WHERE id= ?",
          [firstname, lastname, identifiant, role, id]
        );
      const updateValue = await this.findCurrentUser(id);
      return updateValue;
    } catch (error) {
      return error;
    }
  };
  deleteUser = async (deleteUserValue) => {
    try {
      const { id } = deleteUserValue;
      const result = await connectDB
        .promise()
        .query("DELETE FROM `users` WHERE id=?", [id]);
      return result;
    } catch (error) {
      return error.messsage;
    }
  };
}

export default UserModel;
