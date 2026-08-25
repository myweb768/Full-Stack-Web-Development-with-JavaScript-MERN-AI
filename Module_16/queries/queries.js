import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient(process.env.MONGODB_URI)

async function executeDB(){
    try{
        await client.connect();
        const database = client.db('school');
        const student = database.collection('students');

// Code For skip doble Entry:
        await student.createIndex({name:1}, {unique: true})

        //Task 1: Insert Queries
        //  Insert Queries for one student
        try{
                    await student.insertOne({
            name: "Rahim",
             age: 22,
             department: "CSE",
            cgpa: 3.75
        })
        }catch(error){
            if(error.code === 11000){
                console.log("This Data Already Exists!!")
            }else{
                throw error;
            }
        }


        //Insert Queries for many students
        try{
        await student.insertMany([
            { name: "Karim", age: 21, department: "EEE", cgpa: 3.40 },
            { name: "Sumon", age: 23, department: "CSE", cgpa: 3.80 },
            { name: "Mim", age: 19, department: "BBA", cgpa: 3.20 },
            { name: "Tamim", age: 24, department: "CSE", cgpa: 3.60 }
        ], {ordered: false})
        }catch(error){
            if(error.code === 11000){
                console.log("DB Scaned!!")
            }else{
                throw error
            }
        }
        
        //Task 2: Find Queries
        //Querias for show all student
        const allStudents = await student.find({}).toArray();
        console.log("All Student:", allStudents);

        //Querias for show one student
        const oneStudents = await student.findOne({name:'Rahim'});
        console.log("One Student:", oneStudents);

        //Querias for show only  student's name and department
        const projectedStudents = await student.find({}, {projection:{name:1, department:1, _id: 0}}).toArray();
        console.log("Show Student:", projectedStudents);

        //Task 3: Filter Querias
        //Querias for students whose age is greater than 20
        const ageFilter = await student.find({age:{$gt: 20}}).toArray();
        console.log("Student Age:", ageFilter);

        //Querias for students whose department is CSE
        const cseStudents = await student.find({department:'CSE'}).toArray();
        console.log("CSE Student:", cseStudents);

        //Querias for students whose CGPA is greater than or equal to 3.50
        const heighCGPA = await student.find({cgpa: {$gte: 3.50}}).toArray();
        console.log("Height CGPA Student:", heighCGPA);
        //Taks 3: Sort & Limit
        //Querias for Sort students by CGPA (Highest First)
        const sortedStudent = await student.find({}).sort({cgpa: -1}).toArray();
        console.log("Sorted Student:", sortedStudent);

        //Querias for Show only the first 3 student
        const topThreeStudent = await student.find({}).limit(3).toArray();
        console.log("Top Three Student:", topThreeStudent);


        //Task 5: Update Queries
        //Update one student's department
        await student.updateOne(
            {name: "Sumon"},
            {$set: {department: "EEE"}}
        )

        //Increase one student's CGPA
        await student.updateOne(
            {name: "Karim", cgpaUpdated: {$ne: true}},
            {$inc: {cgpa: 0.20}, $set: {cgpaUpdated:true}}
        )

        //Task 6: Delete Queries for one student
        await student.deleteOne({name:"Mim"})

        //Task 7: Practice Commands
        //Count the total number of students
        const totalStudent = await student.countDocuments();
        console.log("Total Student", totalStudent)

        //All unique departments using distinct().
        const uniqueDept = await student.distinct('department');
        console.log("Unique Department", uniqueDept);

        console.log('All queries executed successfully!')



    }finally{
        await client.close();
    }
}

executeDB().catch(console.dir);