import express from 'express';
import TaskController from '../Controllers/TaskController.js';

const routerTask = express.Router();
const taskController = new TaskController;

/**
 * Protected route on method GET to retrieve all taks from the current user
 * @method GET
 * @param
 * @returns
 */
routerTask.get('/tasks', taskController.getTasks);

/**
 * Protected route on method GET to retrieve the current task
 * @method GET
 * @param {number} id
 * @returns
 */
routerTask.get('/:id', taskController.getTask);

/**
 * Protected route on method POST to update the current task
 * @method POST
 * @param {number} id
 * @returns
 */
routerTask.post('/:id', taskController.updateTask);

/**
 * Protected route on method DELETE to retrieve the current task
 * @method DELETE
 * @param {number} id
 * @returns
 */
routerTask.delete('/:id', taskController.deleteTask);

export default routerTask;