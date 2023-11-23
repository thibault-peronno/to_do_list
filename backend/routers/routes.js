import express from 'express';

import authRouter from './routerAuth.js'
import userRouter from './routerUser.js';
import taskRouter from './routerTask.js';

const router = express.Router();

router.get('/', (req, res) => {res.json({message:'callback'})});

router.use('/api/auth', authRouter);
router.use('/api/user', userRouter);
router.use('/api/task', taskRouter);

export default router;