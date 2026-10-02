# <center>Module 20 Assignment</center>
```txt
Welcome to another assignment. In this assignment, you have to develop a Blog Management System (Backend API). A backend project where users can register, log in, and manage blog posts.

Only authenticated users can create, update, delete, or view blogs.
```

## Requirements:
### User Authentication
```txt
user Registration API
 (name, email, password, phoneNumber).
```
```txt
User Login API
 (JWT + cookie authentication).
```
```txt
Get Logged-in User Profile API
 Return the currently logged-in user's information.
```
```txt
Update Profile API
 Users can update their profile information (name, phoneNumber, etc.).
```
---

---
### Blog Management
```txt
Create Blog API
 (title, content, authorName, tags, blogImage).
```
```txt
Read All Blogs API
 Show all available blog posts.
```
```txt
Read Single Blog API
 Get details of one blog post by ID.
```
```txt
Update Blog API
 Edit blog details (only by the creator of the blog).
```
```txt
Delete Blog API
Delete a blog post (only by the creator).
```
---
---
### Blog Routes Security
```txt
Blog routes must be protected.
Only logged-in users with a valid JWT token can access blog routes.
Use proper file and folder structure, similar to the previous portfolio backend project.
```

Submission Guideline:
```txt
Upload the project code to GitHub and submit the public GitHub repository link.
```
---
---
# 📝 Blog Management System (Backend API)

A RESTful backend where users can register, log in, and manage blog posts.
Authentication uses **JWT stored in an HTTP-only cookie** (Bearer header also supported).
All blog routes are protected: only logged-in users can create, read, update or delete blogs, and only the **creator** of a blog can update or delete it.

---

## ✨ Features

- User registration with hashed passwords (`bcrypt`)
- Login with JWT + HTTP-only cookie
- Get and update logged-in user's profile
- Blog CRUD with image upload (`multer`)
- Owner-only update and delete (`403 Forbidden` for others)
- Security middlewares: `helmet`, `hpp`, `cors`, `express-rate-limit`
- MongoDB, Redis and Mongo Express via Docker Compose

## 🛠 Tech Stack

| Area | Tools |
|---|---|
| Runtime / Framework | Node.js, Express 5 |
| Database | MongoDB (Mongoose) |
| Cache | Redis |
| Auth | JWT (`jsonwebtoken`), `bcrypt`, `cookie-parser` |
| File upload | `multer` |
| Security | `helmet`, `hpp`, `cors`, `express-rate-limit` |
| DevOps | Docker Compose, Mongo Express |

---

## 📁 Project Structure

```txt
➜  Module_20 git:(main) ✗ tree -I node_modules            
.
├── API_TEST
│   └── Module_20.json
├── app.js
├── docker-compose.yml
├── nginx.png
├── nginx_thumb.png
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── src
    ├── config
    │   ├── db.config.js
    │   └── redis.config.js
    ├── controllers
    │   ├── blog.controller.js
    │   └── user.controller.js
    ├── middlewares
    │   ├── auth.varification.user.js
    │   └── file.upload.js
    ├── models
    │   ├── blog.model.js
    │   └── user.model.js
    ├── router
    │   └── api.router.js
    ├── uploads
    │   └── 1790948583179-803730223.png
    └── utility
        ├── server.error.js
        └── token.helper.js

10 directories, 21 files
```

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd Module_20
npm install
```

### 2. Create `.env`

```bash
mv .env.example .env
```