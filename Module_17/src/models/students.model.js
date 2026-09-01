import mongoose from 'mongoose'

export const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is Required"]
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    phone:{
        type: String,
        required: [true, 'Phone is required'],
    },
    course:{
        type: String,
        required: [true, 'Course is required'],
    },

},{timeseries:true});

export const studentModel = mongoose.model('Student', studentSchema);