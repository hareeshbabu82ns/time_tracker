const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true
  },
  description: {
    type: "String",
    default: ""
  },
  projectId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Project"
  },
  background: {
    type: "Boolean",
    default: false
  },
  running: {
    type: "Boolean",
    default: false
  },
  recentTrackId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Track"
  }
});

TaskSchema.methods.start = async function(startingComments) {
  try {
    if (this.running) new Error(`Task ${this.name} already Running`);

    this.running = true;
    const TrackModel = this.model("Track");
    const track = new TrackModel({ startingComments });
    await track.save();
    this.recentTrackId = track._id;
    await this.save();
    new Promise.resolve(this);
  } catch (err) {
    new Promise.reject(err);
  }
};

TaskSchema.statics.startTask = async function(id, startingComments) {
  try {
    const task = await this.findById(id);
    if (task.running) new Error(`Task ${task.name} already Running`);

    task.running = true;
    const TrackModel = task.model("Track");
    const track = new TrackModel({ startingComments });
    await track.save();
    task.recentTrackId = track._id;
    await task.save();
    new Promise.resolve(task);
  } catch (err) {
    new Promise.reject(err);
  }
};

module.exports = mongoose.model("Task", TaskSchema);
