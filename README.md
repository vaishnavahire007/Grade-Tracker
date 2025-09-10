<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grade Tracker - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      font-family: Consolas, "Courier New", monospace;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    ul li::before {
      content: "✅ ";
      color: green;
    }
    footer {
      margin-top: 30px;
      text-align: center;
      font-weight: bold;
    }
    .heart {
      color: red;
    }
  </style>
</head>
<body>

  <h1>🎓 Grade Tracker</h1>
  <p>A full-stack web application to record student marks and automatically generate results and grades. 
     Built with <strong>Node.js, Express.js, MongoDB</strong>, and a simple <strong>HTML/CSS/JS frontend</strong>.
  </p>

  <h2>🚀 Key Functionalities</h2>
  <ul>
    <li>Add candidates with marks for three subjects</li>
    <li>Generate unique student IDs automatically</li>
    <li>Compute total, percentage, result (PASS/FAIL), and grade instantly</li>
    <li>Filter students by All / Pass / Fail</li>
    <li>Display results in a responsive, card-based UI</li>
  </ul>

  <h2>🛠 Tech Stack</h2>
  <p><strong>Backend:</strong> Node.js, Express.js, MongoDB (Mongoose)<br>
     <strong>Frontend:</strong> HTML, CSS, JavaScript
  </p>

  <h2>⚡ Setup & Run</h2>
  <p><strong>Clone the repository:</strong></p>
  <pre><code>git clone https://github.com/vaishnavahire007/Grade-Tracker.git
cd Grade-Tracker
</code></pre>

  <p><strong>Install backend dependencies:</strong></p>
  <pre><code>cd backend
npm install
</code></pre>

  <p><strong>Create a .env file:</strong></p>
  <pre><code>MONGO_URI=mongodb://localhost:27017/gradeTrackerDB
PORT=3000
</code></pre>

  <p><strong>Start the backend server:</strong></p>
  <pre><code>node app.js
</code></pre>

  <p>The server will run at: 
    <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
  </p>

  <footer>
    👨‍💻 Made with <span class="heart">❤️</span> by <strong>Vaishnav Ahire</strong>
  </footer>

</body>
</html>
