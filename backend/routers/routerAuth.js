const express = require('express');
const AuthController = require('../Controllers/AuthController');
const routerUser = express.Router();

/**
 * This route allow to dreate an account at the app to use it. 
 */
routerUser.post('/register', (req, res) => {res.json({message:'AuthController.register'})});

/**
 * this route is using to connect at the app
 */
routerUser.post('/', (req, res) => {res.json({message:'AuthController.login'})});

/**
 * this route is using to disconnect at the app
 */
routerUser.get('/logout', (req, res) => {res.json({message:'AuthController.logout'})});

module.exports = routerUser;