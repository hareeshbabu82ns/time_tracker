const mongoose = require("mongoose");
const moment = require("moment");

const TrackSchema = new mongoose.Schema({
  startingAt: {
    type: "Date",
    default: moment().valueOf()
  },
  startingComments: {
    type: "String",
    trim: true,
    default: ""
  },
  duration: {
    type: "Number",
    default: 0
  },
  endingAt: {
    type: "Date",
    default: moment().valueOf()
  },
  endingComments: {
    type: "String",
    trim: true,
    default: ""
  },
  taskId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Project",
    required: true
  }
});

TrackSchema.pre("save", function(next) {
  //endingAt can not be less than startingAt
  if (this.startingAt < this.endingAt) this.endingAt = this.startingAt;

  //calculate duration
  this.duration = this.endingAt - this.startingAt;

  next();
});

module.exports = mongoose.model("Track", TrackSchema);
