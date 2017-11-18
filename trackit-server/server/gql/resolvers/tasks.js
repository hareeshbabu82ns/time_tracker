const { ObjectID } = require("mongodb");

const Query = {
  tasks: async (root, data, { db: { Task } }) => {
    // const docs = await Tasks.find({ owner_id: uid });
    const docs = await Task.find({});
    // console.log(docs);
    return docs;
  },
  task: async (root, { id }, { db: { Task } }) => {
    const doc = await Task.findById(id);
    // console.log(doc);
    return doc;
  }
};
const Mutations = {
  createTask: async (root, { data }, { db: { Task } }) => {
    const newTask = new Task(data);
    const response = await newTask.save();
    // console.log(response);
    return newTask;
  },
  removeTask: async (root, { id }, { db: { Task } }) => {
    const response = await Task.deleteOne({ _id: new ObjectID(id) });
    // console.log(response);
    return response.deletedCount;
  },
  updateTask: async (root, { data }, { db: { Task } }) => {
    const { id, ...rest } = data;
    const response = await Task.findByIdAndUpdate(
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
  project: async ({ projectId }, data, { db: { Project } }) => {
    return await Project.findById(projectId);
  }
};

module.exports = { Query, Mutations, Fields };
