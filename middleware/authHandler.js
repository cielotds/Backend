import JsonWebTokenError from 'jsonwebtoken';
import * as UserModels from '../models/UserModels.js';

const authHandler = async (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization) {
        res.status(401).json({
            success: false,
            message: [
                {result: "You do not have permission to access this resource."}
            ]
        })
    }
    const token = authorization.split(' ')[1];
    try {
        const {id} = JsonWebTokenError.verify(token, process.env.SECRET);
        const [user] = await UserModels.getUser(id);
        // req.user = user;

        next();
    } catch(e) {
        res.status(401).json({
            success: false,
            message: [
                {result: "Request Unauthorized."}
            ]
        })
    }
}

export default authHandler;