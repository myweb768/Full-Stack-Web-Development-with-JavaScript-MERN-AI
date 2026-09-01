import express from "express";
import {
        createStudent,
        getAllStudents,
        updateStudent,
        deleteStudent 
    } from "../controllers/student.controller.js";


const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;