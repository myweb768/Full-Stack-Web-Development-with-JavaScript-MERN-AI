import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers?.authorization || req.headers?.['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
      return res.status(401).json({
            'success': false,
            'message': 'Access denied. No token provided!!'
        })
    }

    if(!process.env.JWT_SECRET_KEY){
        return res.status(500).json({
            'success': false,
            'message': 'Internal server error. JWT secret key is not defined in the environment variables.'
        })
    }

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY, { algorithms: ['HS256'] });
        req.user = verified;
        next()
    }catch(error){
        res.status(403).json({
            'success': false,
            'message': 'Invlide or expire token'
        });
    }
}