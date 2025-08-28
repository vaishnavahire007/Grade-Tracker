const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String, required: true },
  m1: { type: Number, min: 0, max: 100 },
  m2: { type: Number, min: 0, max: 100 },
  m3: { type: Number, min: 0, max: 100 },
  result: String,
  grade: String
});

module.exports = mongoose.model('candidate', candidateSchema);
