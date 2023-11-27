import connectDB from "../config/db.js";
import TaskService from "../Services/taskService.js";

class TaskModel {
  constructor() {
    this.taskService = new TaskService();
  }

  createTask = async (taskValue) => {
    try {
        const checkValidation = await this.taskService.validateNewTask(taskValue);
        const { description, isDone, user_id } = taskValue;
      const result = await connectDB
        .promise()
        .query(
          "INSERT INTO `tasks` (`description`, `isDone`, `user_id`) VALUES (?,?,?)",
          [description, isDone, user_id]
        );
      return { id: result.id, description, isDone };
    } catch (error) {
      return error;
    }
  };

  findTasksOfCurrentUser = async (userId) => {
    try {
      const [tasks] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `description`, `isdone` FROM `tasks` WHERE user_id = ?",
          [userId]
        );
      return tasks;
    } catch (error) {
      throw new Error(`Une erreur est survenue : ${error}`);
    }
  };

  findTaskOfCurrentUser = async (userId) => {
    try {
      const [task] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `description`, `isDone` FROM `tasks` WHERE id= ?",
          [userId]
        );
      return task;
    } catch (error) {
      throw new Error(`Une erreur est survenue : ${error}`);
    }
  };
}

export default TaskModel;
