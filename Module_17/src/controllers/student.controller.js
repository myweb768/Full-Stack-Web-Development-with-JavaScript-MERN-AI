import { studentModel } from "../models/students.model.js";

export const createStudent = async (req, res)=>{
    try{
         const {name, email, phone, course}  = req.body
        const newStudent = new studentModel({name, email, phone, course});
        const saveStudent = await newStudent.save();

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: saveStudent
      });
    }catch(error){
        res.status(400).json({
            success: false,
            message: "Error occurred while creating student",
            error: error.message
        });
    }
   
}

export const getAllStudents = async (req, res)=>{
    try {
    const allStudents = await studentModel.find();
    res.status(200).json({
        success: true,
        count: allStudents.length,
        data: allStudents
    });

    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error occurred while fetching students"
        });
    }
    
}

export const updateStudent = async (req, res)=>{
    try{
    const {id} = req.params;
    const updatedStudent = await studentModel.findByIdAndUpdate(
        id,
        req.body, 
         {new: true, runValidators: true}
        );

    if(!updatedStudent) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        })
     }

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        data: updatedStudent
    });
}catch(error){
    res.status(500).json({
        success:false,
        message: "Error occurred while updating student",
        error: error.message
    })
    }
};

export const deleteStudent = async (req, res)=>{
    try{
    const {id} = req.params;
    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if(!deletedStudent) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        data: deletedStudent
    });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error occurred while deleting student",
            error: error.message
        });
    }
   
}