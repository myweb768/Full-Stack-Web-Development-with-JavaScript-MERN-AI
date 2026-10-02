const express = require("express");
const router = express.Router();

const verifyUser = require("../middlewares/auth.varification.user");
const upload = require("../middlewares/file.upload");
const user = require("../controllers/user.controller");
const blog = require("../controllers/blog.controller");

// Auth (public)
router.post("/register", user.register);
router.post("/login", user.login);

// Profile (protected)
router.get("/profile", verifyUser, user.getProfile);
router.put("/profile", verifyUser, user.updateProfile);
router.post("/logout", verifyUser, user.logout);

// Blog  
router.post("/blogs", verifyUser, upload.single("blogImage"), blog.createBlog);
router.get("/blogs", verifyUser, blog.getAllBlogs);
router.get("/blogs/:id", verifyUser, blog.getSingleBlog);
router.put("/blogs/:id", verifyUser, upload.single("blogImage"), blog.updateBlog);
router.delete("/blogs/:id", verifyUser, blog.deleteBlog);

module.exports = router;