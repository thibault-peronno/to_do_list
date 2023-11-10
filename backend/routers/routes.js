const express = require('express');

const authRouter = require('./routerAuth');

const router = express.Router();

router.get('/', (req, res) => 'callback');

router.use('/auth', authRouter);

module.exports = router;