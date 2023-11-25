import UserModel from "../Models/user.js";

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
      // console.log("usercontroller return : " + JSON.stringify([user]));
      res.send(user);
    } catch (error) {
      console.log('eeror ' + error);
      res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
    }
  };

  createUser = async (req, res) => {
    // console.log('req.body');
    // console.log(req.body);
    const body= req.body;
    try{
      const createdUser = await this.userModel.createNewUser(body);
      // console.log('createdUser : ');
      // console.log(createdUser);
      
      // return
      res.send(createdUser)
    }catch(error){
      // console.log('error: ' + error.message);
      res.send({message : error});
    }
  }

  updateUser = async (req, res) => {
    const { body } = req
    // console.log("body : ", body);
    try {
      const updateUser = await this.userModel.updateUser(body);
      // console.log("updateUser", updateUser);
      res.send(updateUser);
    } catch (error) {
      // console.log("error controller", error);
      res.send(error);
    }
    // res.json({ message: "UserController.post update user in controller" });
  };

  deleteUser = async (req, res) => {
    console.log("delete controller");
    const { body } = req;
    console.log("body", body);
    try {
      const deleteUser = await this.userModel.deleteUser(body);
      res.send({message: "l'utilisateur a été supprimé",
    status : "ok"});
    } catch (error) {
      res.send({message: error,
      code: 500});
    }
    // res.json({ message: "UserController.delete delete user in controller" });
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
