# <center>Module 17 Assignment</center>

**সংক্ষিপ্ত বিবরণ:**
```
আপনি এই অ্যাসাইনমেন্টের মাধ্যমে MERN Stack ব্যবহার করে একটি ছোট Student Management System তৈরি করবেন।
```

**আপনার: কাজ**

আপনি একটি Student Management System তৈরি করবেন।
প্রতিটি Student-এর জন্য নিচের তথ্যগুলো থাকবে:

* Name
* Email
* Phone
* Course

উদাহরণ:
```text
Name: Rahim
Email: rahim@gmail.com
Phone: 01712345678
Course: MERN
```


## Backend Task
**আপনি Node.js এবং Express ব্যবহার করে Backend তৈরি করবেন।**

### 1. MongoDB Database
আপনি MongoDB ব্যবহার করবেন।
একটি Database তৈরি করবেন:

```student_db```

এবং একটি Collection তৈরি করবেন:

```students```


## 2. Student Model
Student-এর জন্য একটি Model তৈরি করবেন।

**Fields:**

* name
* email
* phone
* course

**সবগুলো Field Required হবে।**

## 3. API তৈরি করবেন
**আপনি মোট ৪টি API তৈরি করবেন।**
```
Create Student
POST /api/students
```

এই API ব্যবহার করে নতুন Student তৈরি করবেন।
```
Get All Students
GET /api/students
```

এই API ব্যবহার করে সব Student-এর Data নিয়ে আসবেন।
```
Update Student
PUT /api/students/:id
```

এই API ব্যবহার করে একজন Student-এর তথ্য Update করবেন।
```
Delete Student
DELETE /api/students/:id
```
এই API ব্যবহার করে একজন Student Delete করবেন।
---
```
Submission Rules
GitHub Repository Link জমা দিতে হবে।  GitHub  লিংক না পেলে আপনি 0 পাবেন
```