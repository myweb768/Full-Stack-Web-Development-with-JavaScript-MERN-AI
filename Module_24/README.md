# সংক্ষিপ্ত বিবরণ

`Topics: React, useEffect, API Calling, Zustand, Local Storage`

```
Objective: এই assignment-এর মাধ্যমে students React ব্যবহার করে API থেকে data fetch করা, state manage করা এবং Local Storage-এ data save করার practice করবে।
```

[View Project](https://usermenagement.vercel.app/)

## Project Requirements

**Create a simple User Management App using React.**

## 1. Fetch Users from API

- Use this API to get users: https://jsonplaceholder.typicode.com/users
- Display users' name, email, and phone number.
- Use useEffect() to fetch data when the component loads.
- Show a loading message while fetching data.

## 2. User Details

- প্রতিটি user-এর জন্য একটি Details button থাকবে।
- Details button-এ click করলে selected user's information দেখাবে।
- User details show করার জন্য React state ব্যবহার করতে পারবে।

## 3. Add Favorite Users

- প্রতিটি user-এর পাশে একটি Favorite button থাকবে।
- Favorite button-এ click করলে user-টি Favorite list-এ add হবে।
- আবার click করলে Favorite list থেকে remove হবে।
- Favorite users-এর data Local Storage-এ save করতে হবে।

## 4. Local Storage

- Page refresh করলেও Favorite users যেন হারিয়ে না যায়।
- App load হওয়ার সময় Local Storage থেকে Favorite users retrieve করতে হবে।
- Favorite list update হলে Local Storage-এ নতুন data save করতে হবে।

## 5. Zustand State Management

- Zustand ব্যবহার করে Favorite users-এর state manage করতে হবে।
- Favorite users add এবং remove করার জন্য store-এ প্রয়োজনীয় functions তৈরি করতে হবে।

## 6. Simple UI

- একটি Navbar থাকবে।
- Navbar-এ Total Users এবং Favorite Users count দেখাতে পারবে।
- Users-গুলো সুন্দর card layout-এ display করতে হবে।
- App অবশ্যই Mobile এবং Desktop responsive হতে হবে।

# Submission Requirements

**Complete source code GitHub repository-তে upload করতে হবে। GitHub repository public রাখতে হবে।**

```txt
Live project vercel এ deploy করে deployment link গিটহাবের readme.md file create  করে submit করতে হবে।

Note: নিজের পছন্দমতো design করতে পারবে। Tailwind CSS, Bootstrap অথবা normal CSS ব্যবহার করতে পারবে।

Keep it simple! Focus on learning API Calling, useEffect, Zustand, and Local Storage.
```
