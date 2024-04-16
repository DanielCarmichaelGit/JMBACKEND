const mongoose = require("mongoose");

const joinCodeSchema = new mongoose.Schema({
  code_id: { type: String, required: true },
  code: { type: String, required: true },
  account_type: { type: String, required: true },
  account_id: { type: String, required: true },
  offer_type: { type: String, required: true },
  offer_data: { type: Object, required: true }
});

module.exports = mongoose.model("JoinCode", joinCodeSchema);
