const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true
  },
  description: {
    type: "String",
    default: ""
  }
});

module.exports = mongoose.model("Client", ClientSchema);
