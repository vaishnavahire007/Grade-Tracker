const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./util/db');
const candidateRoutes = require('./routes/candidateRoutes');
const cors = require('cors');



const app = express();
require('dotenv').config();
app.use(cors());

connectDB();
app.use(bodyParser.json());
app.use('/candidate', candidateRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
