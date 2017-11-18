const { ObjectID } = require("mongodb");
import clientResolvers from "./resolvers/clients";
import projectResolvers from "./resolvers/projects";
import taskResolvers from "./resolvers/tasks";
import trackResolvers from "./resolvers/tracks";

module.exports = {
  Query: {
    ...clientResolvers.Query,
    ...projectResolvers.Query,
    ...taskResolvers.Query,
    ...trackResolvers.Query
  },
  Mutation: {
    ...clientResolvers.Mutations,
    ...projectResolvers.Mutations,
    ...taskResolvers.Mutations,
    ...trackResolvers.Mutations
  },
  Client: clientResolvers.Fields,
  Project: projectResolvers.Fields,
  Task: taskResolvers.Fields,
  Track: trackResolvers.Fields
};
