const { ObjectID } = require("mongodb");

const Query = {
  clients: async (root, data, { db: { Client } }) => {
    // const docs = await Clients.find({ owner_id: uid });
    const docs = await Client.find({});
    // console.log(docs);
    return docs;
  },
  client: async (root, { id }, { db: { Client } }) => {
    const doc = await Client.findById(id);
    // console.log(doc);
    return doc;
  }
};
const Mutations = {
  createClient: async (root, data, { db: { Client } }) => {
    const newClient = new Client(data);
    const response = await newClient.save();
    // console.log(response);
    return newClient;
  },
  removeClient: async (root, { id }, { db: { Client } }) => {
    const response = await Client.deleteOne({ _id: new ObjectID(id) });
    // console.log(response);
    return response.deletedCount;
  },
  updateClient: async (root, data, { db: { Client } }) => {
    const { id, ...rest } = data;
    const response = await Client.findByIdAndUpdate(
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
  projects: async ({ id }, data, { db: { Project } }) => {
    return await Project.find({ clientId: id });
  }
};

module.exports = { Query, Mutations, Fields };
