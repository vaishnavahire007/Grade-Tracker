const Candidate = require('../models/candidate');
const generateCandidateID = require('../util/idGenerator');

const computeGrade = (total) => {
  if (total >= 240) return { result: 'PASS', grade: 'Distinction' };
  if (total >= 180) return { result: 'PASS', grade: 'First Class' };
  if (total >= 150) return { result: 'PASS', grade: 'Second Class' };
  if (total >= 105) return { result: 'PASS', grade: 'Third Class' };
  return { result: 'FAIL', grade: 'No Grade' };
};

exports.addCandidate = async (req, res) => {
  try {
    const { name, m1, m2, m3 } = req.body;

    if (!name || name.length < 2) throw new Error("Name must be at least 2 characters.");
    if ([m1, m2, m3].some(m => m < 0 || m > 100)) throw new Error("Marks must be between 0 and 100.");

    const id = await generateCandidateID(name);
    const total = m1 + m2 + m3;
    const { result, grade } = computeGrade(total);

    const candidate = new Candidate({ id, name, m1, m2, m3, result, grade });
    await candidate.save();

    res.status(201).send(`${id}:${result}`);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

exports.getCandidatesByResult = async (req, res) => {
  try {
    const { criteria } = req.params;

    let query = {};
    if (criteria === 'PASS' || criteria === 'FAIL') query.result = criteria;
    else if (criteria !== 'ALL') throw new Error("Invalid criteria.");

    const candidates = await Candidate.find(query);
    res.send(candidates);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};
