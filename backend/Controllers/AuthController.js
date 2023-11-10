// const express = require('express');

const AuthController = {
    login: async (req, res) => {res.json({message:'AuthController.login in controller'})}
}

module.exports = AuthController;