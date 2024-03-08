import UserModel from "../Models/user.js";
import UserService from "../Services/userService.js";

class UserController {
  constructor() {
    this.userModel = new UserModel();
    this.userService = new UserService();
  }

  /**
   *
   * @param {"id"} req
   * @param {
   * "id",
   * "lastname",
   * "firstname",
   * "identifiant"} res
   */
  getUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) throw new Error();
      const user = await this.userModel.findCurrentUser(userId);
      res.send(user);
    } catch (error) {
      res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
    }
  };

  /**
   *
   * @param {
   * "id",
   * "firstname",
   * "lastname",
   * "identifiant"} req
   * @param {
   *"id",
   *"firstname",
   *"lastname",
   *"identifiant"} res
   */
  updateUser = async (req, res) => {
    const { body } = req;
    try {
      await this.userService.validateUpdateUser(body);
      const updateUser = await this.userModel.updateUser(body);
      if (updateUser.length < 0) {
        return res.status(404).json({
          status: 'error',
          message: "L'utilisateur n' pas pu être mis à jour",
          data: body
        });
      } else if(updateUser.length > 0) {
        return res.status(200).json({
          status :'ok',
          message : "Mise à jour de l'utilisateur",
          data:updateUser
      });
      }else{
        return res.status(500).json({
          status :'error',
          message : "Erreur serveur",
          data:updateUser
      });
    }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  /**
   *
   * @param {
   * "id"} req
   * @param {} res
   */
  deleteUser = async (req, res) => {
    const { body } = req;
    try {
      await this.userService.validateDeleteUser(deleteUserValue);
      const deleteUser = await this.userModel.deleteUser(body);
      res.send(deleteUser);
    } catch (error) {
      res.send({ message: error, code: 500 });
    }
  };
}

export default UserController;
