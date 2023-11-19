import UserModel from "../Models/user.js";

console.log(UserModel.findall);

class UserController {
  constructor() {
    this.userModel = new UserModel();
  }

  getUser = async (req, res) => {
    console.log("function usercontroller");
    try {
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) throw new Error();

      const user = await this.userModel.findCurrentUser(userId);
      console.log("usercontroller return : " + user);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
    }
  };

  updateUser = async (req, res) => {
    res.json({ message: "UserController.post update user in controller" });
  };

  deleteUser = async (req, res) => {
    res.json({ message: "UserController.delete delete user in controller" });
  };
}

// const UserController = {
//   getUser: async (req, res) => {
//     console.log('function usercontroller');
//     try {
//       const userId = parseInt(req.params.id);

//       if (isNaN(userId)) throw new Error();
//       const user = await UserModel.findCurrentUser(userId);
//       console.log( 'usercontroller return : ' + user);
//       res.send(user);
//     } catch (error) {
//       console.log(error);
//       res.json( {message : `message d'erreur : ${error}, ${error.statut}`})
//     }
//   },

//   updateUser: async (req, res) => {
//     res.json({ message: "UserController.post update user in controller" });
//   },

//   deleteUser: async (req, res) => {
//     res.json({ message: "UserController.delete delete user in controller" });
//   },
// };

export default UserController;
