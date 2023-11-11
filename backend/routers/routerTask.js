import express from 'express';
import TaskController from '../Controllers/TaskController.js';
const routerTask = express.Router();

/**
 * Protected route on method GET to retrieve all taks from the current user
 * @method GET
 * @param
 * @returns
 */
routerTask.get('/tasks', TaskController.getTasks);

/**
 * Protected route on method GET to retrieve the current task
 * @method GET
 * @param {number} id
 * @returns
 */
routerTask.get('/:id', TaskController.getTask);

/**
 * Protected route on method POST to update the current task
 * @method POST
 * @param {number} id
 * @returns
 */
routerTask.post('/:id', TaskController.updateTask);

/**
 * Protected route on method DELETE to retrieve the current task
 * @method DELETE
 * @param {number} id
 * @returns
 */
routerTask.delete('/:id', TaskController.deleteTask);

export default routerTask;