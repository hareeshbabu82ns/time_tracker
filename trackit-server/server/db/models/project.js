const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true
  },
  description: {
    type: "String",
    default: ""
  },
  clientId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Client"
  }
});

module.exports = mongoose.model("Project", ProjectSchema);
