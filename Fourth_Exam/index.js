const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());


// upload folder Code
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

//Get Upload image to Browser
app.use("/uploads", express.static(uploadDir));


//======================
//Model Schema of Blog
//======================

const blogSchema = new mongoose.Schema({
     title: { type: String, default: "Untitled Blog" },
    image: { type: String, required: true },
},
{ timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);


//===============================
//Middleware for Uploading Image
//===============================

const storage = multer.diskStorage({
    destination: (req, file, cb)=> cb(null, uploadDir),
    filename: (req, file, cb)=>{
        const uniqueName = Date.now()+"-"+Math.round(Math.random()*1E9)+path.extname(file.originalname);
        cb(null, uniqueName);
    }
});


//======================
//Allowed File Type
//======================
const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null, true);
    }else{
        cb(new Error("Only image files are allowed!"), false);
    }
}


const upload = multer({ 
    storage, 
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
    });


//======================
//Controller for Blog
//======================

const createBlog = async (req, res)=>{
    try{
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            })
        }
        
        const blog = await Blog.create({
            title: req.body.title,
            image: `/uploads/${req.file.filename}`
        });


          res.status(201).json({
      success: true,
      message: "Blog image uploaded successfully",
      data: blog,
    });

        
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error uploading blog image",
            error: error.message
        });
    }
};



//======================
//Routes for Blog
//======================

app.post("/api/blogs", upload.single("image"), createBlog);

//==================================
//Multer Error Handling Middleware
//===============================

app.use((err, req, res, next)=>{
    if(err instanceof multer.MulterError || err.message){
  return res.status(400).json({
    success: false,
    message: err.message || "Multer error occurred",
  });
    };

    next(err);
});

//======================
//Connect to MongoDB and Start Server
//======================

const PORT = process.env.PORT || 5000;

mongoose
.connect("mongodb://127.0.0.1:27017/blogdb")
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
})
.catch((err)=>console.log(err));

