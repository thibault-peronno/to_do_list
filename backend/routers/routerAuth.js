import express from 'express';
import AuthController from '../Controllers/AuthController.js';

const routerAuth = express.Router();
const authController = new AuthController;

/**
 * Public route on method POST is using to connect at the app
 * @method POST
 * @returns Promise
 */
routerAuth.post('/login', authController.login);

/**
 * Protected route on method GET is using to disconnect at the app
 * @method GET
 * @returns Promise
 */
routerAuth.get('/logout', authController.logout);

export default routerAuth;