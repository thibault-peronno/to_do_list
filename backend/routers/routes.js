import express from 'express';

import authRouter from './routerAuth.js'
import userRouter from './routerUser.js';
import taskRouter from './routerTask.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {res.json({message:"Tu es sur l'api https://to-do-list-thibault-peronno.fr. Tu peux aller sur ce lien pour tester l'interface"})});

router.use('/api/auth', authRouter);
router.use('/api/user', authMiddleware.checkToken, userRouter);
router.use('/api/task', authMiddleware.checkToken, taskRouter);

export default router;