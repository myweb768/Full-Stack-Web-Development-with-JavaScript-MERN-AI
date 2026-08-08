import {generateToken, generateRefreshToken} from '../utils/generateToken.js';

export const login = (req, res)=>{
    const {username, password} = req.body;
    let user = 'student';
    let pass = '123456';

    if(username !== user || password !== pass){
        return res.status(400).json({success:false, message: 'Invalid Username or Password!!'});
    }

    const accessToken = generateToken({username});
    const refreshToken = generateRefreshToken({username});

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });

    res.status(200).json({
        success:true,
        message: 'Login Successful',
        accessToken
    })
};

export const dashboard = (req, res)=>{
    res.status(200).json({

  "success": true,

  "message": "Welcome to your dashboard."

});
};

export const logout = (req, res)=>{
    res.clearCookie('refreshToken');
    res.status(200).json({success: true, message: 'Logged out successfully'})
}