const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("../models/blog.model");
const { serverError } = require("../utility/server.error");

const parseTags = (tags) => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map((t) => t.trim()).filter(Boolean);
  return tags.split(",").map((t) => t.trim()).filter(Boolean);
};


const removeImage = (imagePath) => {
  if (!imagePath) return;
  const fullPath = path.join(__dirname, "..", imagePath); 
  fs.unlink(fullPath, () => {});
};

// Create
exports.createBlog = async (req, res) => {
  try {
    const { title, content, authorName, tags } = req.body;

    if (!title || !content || !authorName) {
      if (req.file) removeImage(`/uploads/${req.file.filename}`);
      return res.status(400).json({
        success: false,
        message: "title, content and authorName are required",
      });
    }

    const blog = await Blog.create({
      title,
      content,
      authorName,
      tags: parseTags(tags),
      blogImage: req.file ? `/uploads/${req.file.filename}` : "",
      author: req.user._id,
    });

    res.status(201).json({ success: true, message: "Blog created", data: blog });
  } catch (error) {
    serverError(res, error);
  }
};

// Read all
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    serverError(res, error);
  }
};

// Read single
exports.getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: "Invalid blog id" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    serverError(res, error);
  }
};

// Update 
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: "Invalid blog id" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      if (req.file) removeImage(`/uploads/${req.file.filename}`);
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      if (req.file) removeImage(`/uploads/${req.file.filename}`);
      return res.status(403).json({
        success: false,
        message: "Forbidden: You are not the owner of this blog",
      });
    }

    const { title, content, authorName, tags } = req.body;
    if (title) blog.title = title;
    if (content) blog.content = content;
    if (authorName) blog.authorName = authorName;
    if (tags !== undefined) blog.tags = parseTags(tags);

    if (req.file) {
      removeImage(blog.blogImage);
      blog.blogImage = `/uploads/${req.file.filename}`;
    }

    await blog.save();

    res.status(200).json({ success: true, message: "Blog updated", data: blog });
  } catch (error) {
    serverError(res, error);
  }
};

// Delete 
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: "Invalid blog id" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You are not the owner of this blog",
      });
    }

    removeImage(blog.blogImage);
    await blog.deleteOne();

    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    serverError(res, error);
  }
};