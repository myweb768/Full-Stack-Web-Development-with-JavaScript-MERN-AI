const User = require("../models/user.model");
const {DecodedToken} = require("../utility/token.helper");
const {serverError} = require("../utility/server.error");

const verifyUser = async (req, res, next)=>{
    try{
    let token = req.cookies?.token;
    
    if(!token && req.headers?.authorization?.startsWith("Bearer ")){
        token = req.headers.authorization.split(" ")[1];
    };

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
            });
    };

    const decoded = DecodedToken(token);
    if(!decoded){
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    };

    const user = await User.findById(decoded._id);
    if(!user){
        return res.status(401).json({
            success: false,
            message: "User not found"
        });
    };

    req.user = user;
    next();
    }catch(error){
        serverError(res, error);
    }
};

module.exports = verifyUser;