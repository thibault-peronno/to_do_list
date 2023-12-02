import express from 'express';
import UserController from '../Controllers/UserController.js';

const routerUser = express.Router();
const userController = new UserController

/**
 * Protected route on method GET to retrieve the current user. This route must be protected by token
 * @method GET
 * @param {number} id
 * @returns a json body with data of current user
 */
routerUser.get('/:id', userController.getUser);

/**
 * Protected route on method POST to create the current user's information
 * @method POST
 * @param {} 
 * @returns a new json datas of user
 */
routerUser.post('/', userController.registerUser);

/**
 * Protected route on method POST to update the current user's information
 * @method POST
 * @param {number} id
 * @returns the new datas
 */
routerUser.patch('/:id', userController.updateUser);

/**
 * Protected route on method DELETE to delete the current user
 * @method DELETE
 * @param {number} id
 * @returns nothing, redirect to login page
 */
routerUser.delete('/:id', userController.deleteUser);

export default routerUser;