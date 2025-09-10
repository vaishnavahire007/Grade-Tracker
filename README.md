🎓 Grade Tracker

This is a full-stack web application built with Node.js, Express.js, MongoDB, and a simple HTML/CSS/JS frontend.
It allows you to add candidates, store their marks, automatically calculate their results & grades, and view candidates based on result filters (ALL, PASS, FAIL).

Features

Add new candidates with 3 subject marks.
Automatic ID generation (using initials + sequence).

Automatic calculation of:

✅ Total marks
✅ Percentage
✅ Result (PASS/FAIL)
✅ Grade (Distinction / First Class / Second Class / Third Class / No Grade)

Filter candidates by:

All candidates.
Passed candidates.
Failed candidates.
Beautiful frontend UI with real-time interaction.

Tech Stack

Backend:

Node.js
Express.js
MongoDB (Mongoose)

Frontend:

HTML
CSS
Vanilla JavaScript

Project Structure
grade-tracker/
│
├── backend/
│   ├── app.js
│   ├── controllers/
│   │   └── candidateController.js
│   ├── models/
│   │   ├── candidate.js
│   │   └── sequence.js
│   ├── routes/
│   │   └── candidateRoutes.js
│   ├── util/
│   │   ├── db.js
│   │   └── idGenerator.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.md

Installation & Setup:

1️⃣ Clone the Repository
git clone https://github.com/your-username/grade-tracker.git
cd grade-tracker

2️⃣ Setup Backend
cd backend
npm install

Create a .env file:
MONGO_URI=mongodb://localhost:27017/gradeTrackerDB
PORT=3000

Start the backend server:
node app.js

➡️ Server will run at: http://localhost:3000

3️⃣ Setup Frontend

Simply open frontend/index.html in your browser.
It will interact with the backend API running on http://localhost:3000.

API Endpoints
➡️Add Candidate

POST /candidate/add

{
  "name": "John Doe",
  "m1": 85,
  "m2": 90,
  "m3": 70
}

Frontend Preview

Add Candidate Form
Filter by ALL, PASS, FAIL
Responsive Candidate Cards with Marks, Total, Percentage, Result & Grade
