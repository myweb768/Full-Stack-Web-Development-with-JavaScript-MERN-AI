import express from 'express'
import apiRouter from './routes/api.js'
import { envconfig } from './config/dotenv.js'

const app = express();

app.use(express.json());
app.use('/', apiRouter);

const PORT = process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})