const TaskType = `
# Task of the Project
type Task {
  id: ID!
  name: String!
  description: String
  project: Project!
}
`;
const TaskSchema = `
extend type Query {
  # fetch all Tasks
  tasks: [Task!]!
  task(id:ID!):Task
}

extend type Mutation {
  createTask(data:TaskCreateInput!):Task
  removeTask(id:ID!):Int
  updateTask(data:TaskUpdateInput!):Task
}

input TaskCreateInput {
  name:String!
  description:String
  projectId:ID!
  background:Boolean
}
input TaskUpdateInput {
  id:ID!
  name:String
  description:String
  projectId:ID
  background:Boolean
}
`;

module.exports = () => [TaskType, TaskSchema];
