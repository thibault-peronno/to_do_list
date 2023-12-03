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
   * "firstname" ,
   * "lastname",
   * "identifiant",
   * "password"} req
   * @param {
   * "firstname",
   * "lastname",
   * "identifiant"} res
   */
  registerUser = async (req, res) => {
    const body = req.body;
    try {
      const registeredUser = await this.userModel.registerNewUser(body);
      return res.status(201).json({
        message: "Votre compte est créé",
        registeredUser,
      });
    } catch (error) {
      console.log("erreur register user");
      return res.status(500).json({ error: error.message });
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
