import connectDB from "../config/db.js";
import UserEntity from "../Entities/userEntity.js";

// connectDB();
console.log("connectDB model : " + connectDB);

class UserModel {
  constructor() {
    this.userEntity = new UserEntity();
    console.log(this.userEntity);
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
      // Mettre à jour les propriétés de userEntity avec les données de l'utilisateur
      // this.userEntity.id = user[0].id;
      this.userEntity.firstname = user[0].firstname;
      this.userEntity.lastname = user[0].lastname;
      this.userEntity.identifiant = user[0].identifiant;
      return this.userEntity;
    } catch (error) {
      // return `utilisateur introuvable: ${error.message}, ${error}`;
      throw new Error(`utilisateur introuvable: ${error}`);
    }
  };
}

// const userModel = {
//   findCurrentUser: async (userId) => {
//       try {
//         // return {message : 'test'};
//         console.log('model id : ' + userId);
//       const [user] = await connectDB.promise().query("SELECT * FROM `users` WHERE id = ? ", [
//         userId,
//       ]);
//       console.log('14 : ' + JSON.stringify(user[0].id));
//       return user;
//     } catch (error) {

//       // return `utilisateur introuvable: ${error.message}, ${error}`;
//       throw new Error(`utilisateur introuvable: ${error}`);
//     }
//   },
// };

export default UserModel;
