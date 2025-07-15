# 📘 Learnify

**Learnify** is a full-featured Learning Management System (LMS) built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows instructors to upload and manage video-based courses, while students can register, enroll, track their progress, take quizzes, and access premium content through secure payment integration.

---

## ✨ Features

- 👩‍🏫 Instructor and Student Roles
- 📚 Course Creation with Video Uploads
- 🧠 Interactive Quizzes
- 📈 Progress Tracking for Students
- 🔒 Secure Authentication with JWT
- 💳 Payment Integration (Stripe or Paystack)
- 🔍 Course Search & Filtering
- 📂 Modular Codebase (Frontend & Backend)
- 🎨 Responsive UI. 

---

## 🛠️ Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Frontend   | React + React Router      |
| Backend    | Node.js + Express         |
| Database   | MongoDB (Mongoose)        |
| Auth       | JWT + bcrypt              |
| Styling    | Tailwind CSS / CSS        |
| Payments   | Stripe / Paystack         |
| Deployment | Vercel / Render / Railway |

---

## 📁 Folder Structure

```bash
learnify/
├── client/               # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── server/               # Node.js + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```
