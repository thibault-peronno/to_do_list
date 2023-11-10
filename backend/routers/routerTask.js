const express = require('express');
const TaskController = require('../Controllers/TaskController');
const routerTask = express.Router();

/**
 * Protected route on method GET to retrieve all taks from the current user
 * @method GET
 * @param
 * @returns
 */
routerTask.get('/tasks', (req,res)=> {res.json({message: 'TaskController.all find all tasks'})});

/**
 * Protected route on method GET to retrieve the current task
 * @method GET
 * @param {number} id
 * @returns
 */
routerTask.get('/:id', (req, res)=>{res.json({message : 'TaskController.one find current tast'})});

/**
 * Protected route on method POST to retrieve the current task
 * @method POST
 * @param {number} id
 * @returns
 */
routerTask.post('/:id', (req, res)=>{res.json({message : 'TaskController.one update current tast'})});

/**
 * Protected route on method DELETE to retrieve the current task
 * @method DELETE
 * @param {number} id
 * @returns
 */
routerTask.delete('/:id', (req, res)=>{res.json({message : 'TaskController.delete current tast'})});

module.exports = routerTask;