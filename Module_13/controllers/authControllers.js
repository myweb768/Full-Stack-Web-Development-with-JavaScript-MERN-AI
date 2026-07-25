import jwt from 'jsonwebtoken';

export const loginController = (req, res)=>{

const {email, password} = req.body

if(email === 'student@example.com' && password === '123456'){
    const token = jwt.sign(
        {email: email},
        process.env.JWT_SECRET_KEY || 'secret_key',
        {expiresIn: '1h'}
    );

    return res.status(200).json({
       
        'success': true,
        'message': "Login Successful",
        'token': token
    });
}else{
    return res.status(401).json({
        'success': false,
        'message': 'Invalid Email or password'
    })
}

};
