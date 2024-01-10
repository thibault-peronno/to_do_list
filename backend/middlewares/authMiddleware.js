import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authMiddleware  = {
    checkToken: (req, res, next) => {
        try{
            let token = '';
            if( req.cookies?.auth_cookies){
                console.log('res cookies', req.cookies?.auth_cookies);
                token = req.cookies?.auth_cookies;
            } else if(req.headers.authorization){
                try {
                    token = req.headers.authorization.split(' ')[1];
                    console.log('headers token', token);
                   } catch (error) {
                    console.error('Error assigning token:', error);
                   }
            }
            // console.log(req.cookies);
            // const token = req.headers.authorization.split(' ')[1];
            console.log('ligne 17', token);
            jwt.verify(token, process.env.JWT_SECRET);
            next();
        }catch{
            res.status(401).json({ error: 'Invalid token' });
        }
    },
}

export default authMiddleware;