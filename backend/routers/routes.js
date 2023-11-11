import express from 'express';

import authRouter from './routerAuth.js'
import userRouter from './routerUser.js';
import taskRouter from './routerTask.js';

const router = express.Router();

router.get('/', (req, res) => {res.json({message:'callback'})});

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/task', taskRouter);

export default router;