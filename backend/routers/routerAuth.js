import express from 'express';
import AuthController from '../Controllers/AuthController.js';

const routerAuth = express.Router();
const authController = new AuthController;

/**
 * Public route on method POST to allow to create an account at the app to use it. 
 * @method POST
 * @returns Promise
 */
routerAuth.post('/register', authController.register);

/**
 * Public route on method POST is using to connect at the app
 * @method POST
 * @returns Promise
 */
routerAuth.post('/', authController.login);

/**
 * Protected route on method GET is using to disconnect at the app
 * @method GET
 * @returns Promise
 */
routerAuth.get('/logout', authController.register);

export default routerAuth;