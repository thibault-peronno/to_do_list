const jwt = require('jsonwebtoken');
const logger = require('../helpers/logger');
const userMiddleware  = {
    checkIfLoggedin: (req, res, next) => {
        try{
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET);
            next();
        }catch{
            logger.error('401 - Unauthorized');
            res.status(401).send('Unauthorized');
        }
    },
    checkIfFleetManager: (req, res, next) => {
        try{
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET);
            const decodedToken = jwt.decode(token);
            if(decodedToken.role !== 'fleetManager'){
                logger.error('403 - Forbidden');
                res.status(403).send('Forbidden');
            }
            next();
        }catch{
            logger.error('401 - Unauthorized');
            res.status(401).send('Unauthorized');
        }
    }
}

module.exports = userMiddleware;