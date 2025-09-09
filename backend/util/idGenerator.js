const Sequence = require('../models/sequence');

async function generateCandidateID(name) {
  const initials = name.substring(0, 2).toUpperCase();
  const sequence = await Sequence.findOneAndUpdate(
    { name: "CANDID_SEQ" },
    { $inc: { value: 1 } },
    { new: true }
  );
  return initials + sequence.value;
}

module.exports = generateCandidateID;
