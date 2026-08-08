import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './routes/api.js';


dotenv.config();
const app = express();
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.status(200).json({

  "success": true,

  "message": "Welcome to User Session API"

});
});

app.use(express.json());
app.use('/api', router);


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is rinning on http://localhost:${port}`);
})