const { ObjectID } = require("mongodb");

const Query = {
  tracks: async (root, data, { db: { Track } }) => {
    // const docs = await Tracks.find({ owner_id: uid });
    const docs = await Track.find({});
    // console.log(docs);
    return docs;
  },
  track: async (root, { id }, { db: { Track } }) => {
    const doc = await Track.findById(id);
    // console.log(doc);
    return doc;
  }
};
const Mutations = {
  createTrack: async (root, { data }, { db: { Track } }) => {
    const newTrack = new Track(data);
    const response = await newTrack.save();
    // console.log(response);
    return newTrack;
  },
  removeTrack: async (root, { id }, { db: { Track } }) => {
    const response = await Track.deleteOne({ _id: new ObjectID(id) });
    // console.log(response);
    return response.deletedCount;
  },
  updateTrack: async (root, { data }, { db: { Track } }) => {
    const { id, ...rest } = data;
    const response = await Track.findByIdAndUpdate(
      id,
      { $set: rest },
      { new: true }
    );
    // console.log(response);
    return response;
  }
};

const Fields = {
  id: root => root._id || root.id,
  task: async ({ taskId }, data, { db: { Task } }) => {
    return await Task.findById(taskId);
  }
};

module.exports = { Query, Mutations, Fields };
