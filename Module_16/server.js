import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI)

async function run(){
    try{
        await client.connect();
        console.log('Connected To MongoDB')
    }catch(error){
        console.error('Not Connected' + error)
    }
}

run();

app.get('/students', async (req, res)=>{
    try{
        await client.connect();
        const db = client.db("school");
        const students = await db.collection('students').find({}).toArray();
        res.status(200).json(students)
    }catch (error) {
        res.status(500).json({ message: "Error fetching students", error: error.message });
    }
})

let PORT = process.env.PORT || 5000;

console.log("**First time need to run queries or npm run db")

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})