import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({success: false, message: 'Access Denied'});
    }

    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    }catch(error){
        return res.status(403).json({success:false, message: 'Invalid or Expired Token'});
    }
}
