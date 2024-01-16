const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  folder_id: { type: String, required: true },
  associated_org: { type: Object, required: true },
  associated_client: { type: Array, required: true },
  documents: { type: Object, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  created_by: { type: Object, required: true },
  client: { type: Object, required: true }
});

module.exports = mongoose.model("Folder", folderSchema);