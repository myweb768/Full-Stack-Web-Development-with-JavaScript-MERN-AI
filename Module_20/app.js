const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const dotenv = require("dotenv");

const router = require("./src/router/api.router");

dotenv.config()
const app = express();


//Security middlewares
app.use(helmet({crossOriginResourcePolicy:{policy: "cross-origin"}}));
app.use(hpp());
app.use(cors({origin: true, credentials:true}));
app.use(
    rateLimit({
        windowMs: 15*60*100,
        max:100,
        message: "Too many requests, Please try again later"
    }));


    //Body and cookies
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());

    //Media Uploads
    app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));


    //All Router
    app.use("/api/v1", router)

    //404 Response
    app.use((req, res)=>{
        res.status(404).json({success:false, message: "Source not found!!"});
    });


    //Global Error Handelar
    app.use((err, req, res, next)=>{
    console.error(err);
    res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
    })
});


module.exports = app;