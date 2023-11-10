const express = require('express');
const AuthController = require('../Controllers/AuthController');
const routerAuth = express.Router();

/**
 * Public route on method POST to allow to create an account at the app to use it. 
 * @method POST
 * @returns
 */
routerAuth.post('/register', (req, res) => {res.json({message:'AuthController.register'})});

/**
 * Public route on method POST is using to connect at the app
 * @method POST
 * @returns
 */
routerAuth.post('/', AuthController.login);

/**
 * Protected route on method GET is using to disconnect at the app
 * @method GET
 * @returns
 */
routerAuth.get('/logout', (req, res) => {res.json({message:'AuthController.logout'})});

module.exports = routerAuth;