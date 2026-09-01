import mongoose from "mongoose";
import dotenv from "dotenv";
import { studentModel } from "../models/students.model.js";

dotenv.config();
const defaultStudents = [
    { name: "Rahim", email: "rahim@gmail.com", phone: "01711111111", course: "MERN" },
  { name: "Karim", email: "karim@gmail.com", phone: "01722222222", course: "Python" },
  { name: "Salma", email: "salma@gmail.com", phone: "01733333333", course: "React" },
  { name: "Nadia", email: "nadia@gmail.com", phone: "01744444444", course: "Node.js" },
  { name: "Fahim", email: "fahim@gmail.com", phone: "01755555555", course: "MongoDB" }
];

const seedStudents = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected successfully');
        
        let addCount = 0;
        let skippedCount = 0;

        for (const studentsData of defaultStudents){
            const exists = await studentModel.findOne({email: studentsData.email})

            if(exists){
                console.log(`Student with email ${studentsData.email} already exists. Skipping...`);
                skippedCount++;
                continue;
            }else{
                await studentModel.create(studentsData);
                console.log(`Student with email ${studentsData.email} added successfully.`);
                addCount++;     
            }
        }

        console.log(`Seeding completed. ${addCount} students added, ${skippedCount} students skipped.`);
        process.exit(0);
    }catch(error){
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

seedStudents()