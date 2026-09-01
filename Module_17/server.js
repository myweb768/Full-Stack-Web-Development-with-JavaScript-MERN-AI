import express from 'express';
import  dotenv from "dotenv";
import connectdb from './src/configs/db.config.js';
import studentRoutes from './src/routes/students.route.js';

dotenv.config()
connectdb()

const app = express()

app.use(express.json())
app.use("/api/students", studentRoutes)


console.log("run 'npm run seed' to seed the database with default students data");

let PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})