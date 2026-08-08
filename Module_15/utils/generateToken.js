import jwt from 'jsonwebtoken';

export const generateToken = (payload)=>{
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '20m'})
}

export const generateRefreshToken = (payload)=>{
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '7d'})
}