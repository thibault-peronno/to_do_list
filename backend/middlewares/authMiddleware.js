import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authMiddleware  = {
    checkToken: (req, res, next) => {
        try{
            let token = '';
            if( req.cookies?.auth_cookies){
                token = req.cookies?.auth_cookies;
            } else if(req.headers.authorization){
                try {
                    token = req.headers.authorization.split(' ')[1];
                   } catch (error) {
                    console.error('Error assigning token:', error);
                   }
            }
            jwt.verify(token, process.env.JWT_SECRET);
            next();
        }catch{
            res.status(401).json({ error: 'Invalid token' });
        }
    },
}

export default authMiddleware;