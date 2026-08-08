# <center>Module 15 Assignement</center>

```text
Short Description:
এই প্রজেক্টের মাধ্যমে তোমরা শিখবে কীভাবে JWT Authentication, HTTP Only Cookie, এবং Redis ব্যবহার করে User Session তৈরি করতে হয় এবং Redis-এ Temporary Notes সংরক্ষণ করতে হয়।
```

```Note: You do not need to use MongoDB or Mongoose. All user information can be hardcoded.```

## Technology
* Node.js
* Express.js
* JWT
* Redis
* Cookie Parser
* dotenv

## 1. Project Setup
**Create an Express.js project.**
**Maintain the following folder structure:**

* controllers
* routes
* middleware
* config
* utils (Optional)

## 2. Welcome API
Create a GET API: `/`

**Return the following response:**
```json
{

  "success": true,

  "message": "Welcome to User Session API"

}
```

## 3. Login API
Create a POST API: `/api/login`

**Use the following hardcoded credentials:**
```text
Username: student
Password: 123456
```

### Requirements:

* Verify the username and password.
* Generate an Access Token.
* Generate a Refresh Token.
* Store the Refresh Token in an HTTP Only Cookie.
* Return the Access Token.

## 4. User Dashboard API
Create a GET API: `/api/dashboard`

### Requirements:

* This should be a Protected Route.
* Verify the Access Token using middleware.
* Return the following response:
```json
{

  "success": true,

  "message": "Welcome to your dashboard."

}
```

## 5. Save a Note in Redis
Create a POST API: `/api/note`

### Requirements:

**Accept the following JSON:**
```json
{

  "note": "Learn Express.js middleware."

}
```

* This route must be protected.
* Store the note in Redis.
* Set an expiration time of 10 minutes (600 seconds).

### 6. View Saved Note
Create a GET API: `/api/note`

### Requirements:

* Return the saved note from Redis.
* If the note has expired or does not exist, return a suitable message.

## 7. Delete Note
Create a DELETE API: `/api/note`

### Requirements:

* Remove the note from Redis.
* Return a success message.

## 8. Logout API
Create a POST API: `/api/logout`

### Requirements:

* Clear the Refresh Token Cookie.
* Return a success message.
---

**Submission Requirements**
Submit  GitHub Repository Link - <span style ="color: red;">Without this, you will get 0</span>
Create all the necessary files and folders.

