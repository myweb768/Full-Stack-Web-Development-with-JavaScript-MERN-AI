# MERN 16 || M-14 || Assignment 
In this assignment, you will build a simple authentication system using Express.js, JWT, HTTP Only Cookies, and Redis.

Note: You do not need to use MongoDB or Mongoose. User information can be hardcoded in your project.

## Technology
* Node.js
* Express.js
* JWT
* Redis
* Cookie Parser
* dotenv

## 1. Project Setup
 Create an Express.js project. Organize your project using the following folder structure:
* controllers
* routes
* middleware
* config
* utils (Optional)

## 2. Home Route
Create a GET API:
```
/
```
Return the following response:
```json
{

  "success": true,

  "message": "Welcome to Express.js Authentication API"

}
```

## 3. Login API
Create a POST API:
```
/api/login
```
**Use the following hardcoded user:**

* **Email: student@gmail.com**
* **Password: 123456**

### Requirements:
* Verify the email and password.
* Generate an Access Token.
* Generate a Refresh Token.
* Store the Refresh Token in an HTTP Only Cookie.
* Return the Access Token in the response.

## 4. Protected Profile API
Create a GET API:
```
/api/profile
```
Requirements:
* **This route should be protected.**
* **Verify the Access Token using middleware.**

If the token is valid, return:
```json
{

  "success": true,

  "message": "Welcome to your profile."

}
```


## 5. Store Temporary Data in Redis
Create a POST API:
```
/api/cache
```

Requirements:

**This route should be protected.**

Accept the following JSON:
```json
{

  "title": "Learning Redis",

  "message": "Redis is awesome!"

}
```

* **Store the data in Redis.**
* **Set an expiration time of 300 seconds (5 minutes).**

## 6. Get Redis Data
Create a GET API:
```
/api/cache
```
Requirements:
* **Return the stored data from Redis.**
* **If no data exists, return a suitable message.**

## 7. Logout API
Create a POST API:
```
/api/logout
```
Requirements:
* **Clear the Refresh Token Cookie.**
* **Return a success message.**
---
Submission Requirements
<span style='color:red;'>Submit  GitHub Repository Link - Without this, you will get 0</span>
Create all the necessary files and folders