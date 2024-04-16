const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  skill_id: { type: String, required: true },
  skill_industry: { type: String, required: true },
  skill_keywords: { type: Array, required: true },
  skill_title: { type: String, required: true }
});

module.exports = mongoose.model("Skill", skillSchema);
