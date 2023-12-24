import TaskModel from "../models/task.js";
import TaskService from "../Services/taskService.js";

class TaskController {
  constructor() {
    this.taskModel = new TaskModel();
    this.taskService = new TaskService();
  }

  /**
   * 
   * @param {
   * "description",
   * "isDone",
   * "user_id"} req 
   * @param {
   * "description",
   * "isDone"} res 
   */
  createTask = async (req, res) => {
    try {
      const { body } = req;
      await this.taskService.validateNewTask(body);
      const newTask = await this.taskModel.createTask(body);
      res.status(201).send(newTask);
    } catch (error) {
      res.send(error);
    }
  };

  /**
   * 
   * @param {"id"} req 
   * @param {
   * "id",
   * "description",
   * "isdone"} res 
   */
  getTasks = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) throw new Error();
      const tasks = await this.taskModel.findTasksOfCurrentUser(userId);
      res.send(tasks);
    } catch (error) {
      res.json({ message: error });
    }
  };

  /**
   * 
   * @param {id} req 
   * @param {
   * "id",
   * "description",
   * "isdone"} res 
   */
  getTask = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) throw new Error();
      const task = await this.taskModel.findTaskOfCurrentUser(userId);
      res.send(task);
    } catch (error) {
      res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
    }
  };

  /**
   * 
   * @param {
   * "id",
   * "description",
   * "isDone"} req 
   * @param {
   * "id",
   * "description",
   * "isDone"} res 
   */
  updateTask = async (req, res) => {
    console.log('update controller', req.body);
    try {
      // console.log(body);
      const { body } = req;
      // await this.taskService.validateUpdateTask(body);
      const result = await this.taskModel.updateTask(body);
      // console.log('result controller', result);
      if (result.affectedRows === 0) {
        return res.sendStatus(404);
      } else {
        return res.status(204).json({data : 'Mise à jour du status de la tâche'});
      }
      
    } catch (error) {
      // console.log(error);
      return res
        .status(500)
        .json({ error: "La mise à jour a échouée", message: error });
    }
  };

  /**
   * 
   * @param {"id"} req 
   * @param {} res 
   */
  deleteTask = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) throw new Error();
      const task = await this.taskModel.deleteTask(id);
      res.send({ message: "la tâche a été supprimé", status: "ok" });
    } catch (error) {
      res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
    }
  };
}

export default TaskController;
