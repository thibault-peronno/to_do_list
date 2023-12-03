import express from 'express';
import TaskController from '../Controllers/TaskController.js';

const routerTask = express.Router();
const taskController = new TaskController;

/**
 * Protected route on method GET to retrieve all taks from the current user
 * @method GET
 * @param {id}
 * @returns a json datas of all tasks from current user
 */
routerTask.get('/tasks/:id', taskController.getTasks);

/**
 * Protected route on method GET to retrieve the current task
 * @method GET
 * @param {id}
 * @returns a json datas of task from current user
 */
routerTask.get('/:id', taskController.getTask);

/**
 * Protected route on method POST to update the current task
 * @method POST
 * @param {id}
 * @returns an update of current task in json
 */
routerTask.patch('/:id', taskController.updateTask);

/**
 * Protected route on method POST to update the current task
 * @method POST
 * @param 
 * @returns a new json task datas 
 */
routerTask.post('/', taskController.createTask);

/**
 * Protected route on method DELETE to retrieve the current task
 * @method DELETE
 * @param {number} id
 * @returns
 */
routerTask.delete('/:id', taskController.deleteTask);

export default routerTask;