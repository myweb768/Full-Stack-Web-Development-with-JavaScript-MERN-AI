import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes/api.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Welcome to Express.js Authentication API"

    })
})

app.use('/api', router);

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})