import {generateToken, generateRefreshToken} from '../utils/generateToken.js';



export const login = (req, res)=>{
    const {email, password} = req.body;

    if(email !== 'student@gmail.com' || password !== '123456' ){
        return res.status(400).json({success:false, message: 'Invalid Email or Password'});
    }

    const accessToken = generateToken({email});
    const refreshToken = generateRefreshToken({email});

    res.cookie('refreshToken', refreshToken,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });

    res.status(200).json({
        success: true,
        message: 'Login Successul',
        accessToken
    })
};

export const getProfile = (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Welcome to your profile.'
    })
};

export const logout = (req, res)=>{
    res.clearCookie('refreshToken');
    res.status(200).json({success: true, message: 'Logged out successfully'})
}
