const { ObjectID } = require("mongodb");

const Query = {
  projects: async (root, data, { db: { Project } }) => {
    // const docs = await Projects.find({ owner_id: uid });
    const docs = await Project.find({});
    // console.log(docs);
    return docs;
  },
  project: async (root, { id }, { db: { Project } }) => {
    const doc = await Project.findById(id);
    // console.log(doc);
    return doc;
  }
};
const Mutations = {
  createProject: async (root, data, { db: { Project } }) => {
    const newProject = new Project(data);
    const response = await newProject.save();
    // console.log(response);
    return newProject;
  },
  removeProject: async (root, { id }, { db: { Project } }) => {
    const response = await Project.deleteOne({ _id: new ObjectID(id) });
    // console.log(response);
    return response.deletedCount;
  },
  updateProject: async (root, data, { db: { Project } }) => {
    const { id, ...rest } = data;
    const response = await Project.findByIdAndUpdate(
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
  client: async ({ clientId }, data, { db: { Client } }) => {
    return await Client.findOne({ _id: clientId });
  }
};
module.exports = { Query, Mutations, Fields };
