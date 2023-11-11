import express from 'express';
import AuthController from '../Controllers/AuthController.js';
const routerAuth = express.Router();

/**
 * Public route on method POST to allow to create an account at the app to use it. 
 * @method POST
 * @returns Promise
 */
routerAuth.post('/register', AuthController.register);

/**
 * Public route on method POST is using to connect at the app
 * @method POST
 * @returns Promise
 */
routerAuth.post('/', AuthController.login);

/**
 * Protected route on method GET is using to disconnect at the app
 * @method GET
 * @returns Promise
 */
routerAuth.get('/logout', AuthController.register);

export default routerAuth;