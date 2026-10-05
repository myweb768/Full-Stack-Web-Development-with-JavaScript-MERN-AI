const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//Create Folder
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

const app = express();
const port = 3000;

//Setup Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({storage: storage});

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Single File upload code
app.post('/upload-single', upload.single('profilePic'), (req, res) =>{
    try{
        if(!req.file){
            return res.status(400).send({message: 'Please select a picture first!!'})
        }
    res.status(200).send({
        message: 'Single file uploaded successfully!!',
        file: req.file
    });
    }catch(error){
        res.status(500).send({message: error.message});
    }
});

//Multiple file upload code
app.post('/upload-multiple', upload.array('galleryFiles', 5), (req, res)=>{
    try{
        if(!req.files || req.files.length === 0){
            return res.status(400).send({message: 'Please select at least one file!!'})
        }
        res.status(200).send({
            message: 'Multiple files uploaded successfully!!',
            file: req.files
        })
    }catch(error){
        res.status(500).send({message: error.message});
    }
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
});


/*
package.json
{
  "name": "multer-file-upload-live-exam",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "express": "^5.2.1",
    "multer": "^2.2.0"
  }
}

*/