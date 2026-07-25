# MERN 16 || M-13 || Assignment 
**The purpose of this assignment is to learn the fundamentals of Express.js, including project structure, routing, controllers, JSON responses, and basic JWT Authentication.**

## Technology
* Node.js
* Express.js
* JSON Web Token (JWT)

## Project Requirements
### 1. Project Setup*
Create a new Express.js project.

*Requirements:

* Initialize the project using NPM.
* Install the required packages.
* Run the server on Port 5000.

### 2. Folder Structure
Organize your project using the following structure:

* controllers
* routes
* middleware (Optional)
* config (Optional)
* app.js or server.js
* Separate your routes and controller logic properly.

### 3. Create Routes
Create the following GET APIs.
```text
Home Route
GET /

Return:
```
```json
{

  "success": true,

  "message": "Welcome to Express.js API"

}
```


```text
About Route
GET /about

Return:
```
```json
{

  "success": true,

  "message": "This is the About API"

}
```

```text
Contact Route
GET /contact

Return:
```
```json
{

  "success": true,

  "email": "support@example.com",

  "phone": "+8801700000000"

}
```

```text
Services Route
GET /services

Return:
```
```json
{

  "success": true,

  "services": [

    "Web Development",

    "Mobile App Development",

    "UI/UX Design"

  ]

}
```


### 4. Create Controllers
Create separate controller functions for each route.

Example:
* homeController
* aboutController
* contactController
* servicesController
* loginController

<span style="color:red;">Do not write controller logic directly inside the route file.</span>

### 5. Login API with JWT
Create a POST API:
```text
/login

Requirements:

Accept the following JSON data:
```
```json
{

  "email": "student@example.com",

  "password": "123456"

}
```


<span syule="color:yellow;"> If the email and password are correct:</spna>
```text
Generate a JWT Token.

Return the token in the response.

Example Response:
```
```json
{

  "success": true,

  "message": "Login Successful",

  "token": "YOUR_JWT_TOKEN"

}
```


If the credentials are incorrect:
```json
{

  "success": false,

  "message": "Invalid Email or Password"

}
```

Submission Requirements
Submit the following:

<span style='color:red;'>Submit  GitHub Repository Link - Without this, you will get 0</span>

Create all the necessary files and folders