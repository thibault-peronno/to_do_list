import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authMiddleware  = {
    checkToken: (req, res, next) => {
        try{
            console.log(req.cookies);
            const token = req.cookies?.auth_cookies;
            // const token = req.headers.authorization.split(' ')[1];
            console.log('token', token);
            jwt.verify(token, process.env.JWT_SECRET);
            next();
        }catch{
            res.status(401).json({ error: 'Invalid token' });
        }
    },
}

export default authMiddleware;