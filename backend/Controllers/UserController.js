import UserModel from "../Models/user.js";

class UserController {
  constructor() {
    this.userModel = new UserModel();
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
    console.log("function usercontroller");
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) throw new Error();
      const user = await this.userModel.findCurrentUser(userId);
      res.send(user);
    } catch (error) {
      console.log("eeror " + error);
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
      const updateUser = await this.userModel.updateUser(body);
      res.send(updateUser);
    } catch (error) {
      res.send(error);
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
      const deleteUser = await this.userModel.deleteUser(body);
      res.send(deleteUser);
    } catch (error) {
      res.send({ message: error, code: 500 });
    }
  };
}

export default UserController;
