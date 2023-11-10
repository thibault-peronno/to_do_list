const express = require('express');

const authRouter = require('./routerAuth');
const userRouter = require('./routerUser');
const taskRouter = require('./routerTask');

const router = express.Router();

router.get('/', (req, res) => {res.json({message:'callback'})});

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;