const express = require('express');
const router = express.Router();

const { addCandidate, getCandidatesByResult } = require('../controllers/candidateController');

router.post('/add', addCandidate);
router.get('/result/:criteria', getCandidatesByResult);

module.exports = router;
