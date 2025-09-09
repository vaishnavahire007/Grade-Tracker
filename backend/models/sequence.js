const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  name: String,
  value: Number
});

module.exports = mongoose.model('sequence', sequenceSchema);
