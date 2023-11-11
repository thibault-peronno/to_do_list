import UserModel from "../models/user.js";

console.log(UserModel.findall);

const UserController = {
  getUser: async (req, res) => {
    try {
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) throw new Error();
      const user = await UserModel.findCurrentUser(userId);
      console.log(user);
      res.send(user);
    } catch (error) {}
  },

  updateUser: async (req, res) => {
    res.json({ message: "UserController.post update user in controller" });
  },

  deleteUser: async (req, res) => {
    res.json({ message: "UserController.delete delete user in controller" });
  },
};

export default UserController;
