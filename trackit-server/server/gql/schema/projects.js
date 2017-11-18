const ProjectType = `
# Project of the Tracks
type Project {
  id: ID!
  name: String!
  description: String
  client: Client
}
`;
const ProjectSchema = `
extend type Query {
  # fetch all Projects
  projects: [Project!]!
  project(id:ID!):Project
}

extend type Mutation {
  createProject(name:String!,description:String,clientId:ID):Project
  removeProject(id:ID!):Int
  updateProject(id:ID!,name:String!,description:String):Project
}
`;

module.exports = () => [ProjectType, ProjectSchema];
