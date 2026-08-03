import jwt from 'jsonwebtoken';

export const varifyToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({success: false, message: 'Access Denied'});
    }

    try{
        const varified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = varified;
        next();
    }catch(error){
        res.status(403).json({success:false, message: 'Invalid or Expired Token'});
    }
};

