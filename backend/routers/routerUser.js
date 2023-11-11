import express from 'express';
import UserController from '../Controllers/UserController.js';

const routerUser = express.Router();

/**
 * Protected route on method GET to retrieve the current user. This route must be protected by token
 * @method GET
 * @param {number} id
 * @returns a json body with data of current user
 */
routerUser.get('/:id', UserController.getUser);

/**
 * Protected route on method POST to update the current user's information
 * @method POST
 * @param {number} id
 * @returns the new datas
 */
routerUser.post('/:id', UserController.updateUser);

/**
 * Protected route on method DELETE to delete the current user
 * @method DELETE
 * @param {number} id
 * @returns nothing, redirect to login page
 */
routerUser.delete('/:id', UserController.updateUser);

export default routerUser;