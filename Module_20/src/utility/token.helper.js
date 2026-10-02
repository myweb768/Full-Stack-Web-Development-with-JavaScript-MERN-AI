const jwt = require("jsonwebtoken");

exports.EncodedToken = (email, _id)=>{
    let payload = {email, _id};
    let key = process.env.JWT_SECRET;
    let expiresIn = process.env.JWT_EXPIRES_IN;
    return jwt.sign(payload, key, {expiresIn});
}

exports.DecodedToken = (token)=>{
    try{
        let key = process.env.JWT_SECRET;
        let decoded = jwt.verify(token, key);
        return decoded;
    }catch(error){
        return null;
    }
}