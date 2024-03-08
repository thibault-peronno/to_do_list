import connectDB from "../config/db.js";
import TaskService from "../Services/taskService.js";

class TaskModel {
  constructor() {
    this.taskService = new TaskService();
  }

  createTask = async (taskValue) => {
    try {
      const { description, isDone, user_id } = taskValue;
      const [result, metadata] = await connectDB
        .promise()
        .query(
          "INSERT INTO `tasks` (`description`, `isDone`, `user_id`) VALUES (?,?,?)",
          [description, isDone, user_id]
        );
        const newTask = await this.findTaskOfCurrentUser(result.insertId);
      return newTask;
    } catch (error) {
      return error;
    }
  };

  findTasksOfCurrentUser = async (userId) => {
    try {
      const [tasks] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `description`, `isDone` FROM `tasks` WHERE user_id = ?",
          [userId]
        );
      return tasks;
    } catch (error) {
      throw new Error(`Une erreur est survenue : ${error}`);
    }
  };

  findTaskOfCurrentUser = async (taskId) => {
    try {
      const [task] = await connectDB
        .promise()
        .query(
          "SELECT `id`, `description`, `isDone` FROM `tasks` WHERE id= ?",
          [taskId]
        );
      return task;
    } catch (error) {
      throw new Error(`Une erreur est survenue : ${error}`);
    }
  };

  updateTask = async (taskValue) => {
    try {
      const { description, isDone, id } = taskValue;
      const result = await connectDB
        .promise()
        .query("UPDATE `tasks` SET description = ?, isDone = ? WHERE id=?", [
          description,
          isDone,
          id,
        ]);
      return result;
    } catch (error) {
      return error;
    }
  };

  deleteTask = async (deleteTaskId) => {
    try {
      const result = await connectDB
        .promise()
        .query("DELETE FROM `tasks` WHERE `id`=?", [deleteTaskId]);
      return result;
    } catch (error) {
      return error.message;
    }
  };
}

export default TaskModel;
