const { makeExecutableSchema } = require("graphql-tools");
const fs = require("fs");
const path = require("path");
const resolvers = require("./resolvers");

// // Load the schema file
// const typeDefs = fs
//   .readFileSync(path.join(__dirname, "schema.graphql"))
//   .toString();

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    clients: [Client!]!
  }
  type Mutation {
    removeClient(id:ID!):Int
  }
`;

const ClientSchema = require("./schema/clients");
const ProjectSchema = require("./schema/projects");
const TaskSchema = require("./schema/tasks");
const TrackSchema = require("./schema/tracks");
const typeDefs = [
  SchemaDefinition,
  ClientSchema,
  ProjectSchema,
  TaskSchema,
  TrackSchema
];

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
