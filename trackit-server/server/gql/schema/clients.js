const ClientType = `
# Client of the Project
type Client {
  id: ID!
  name: String!
  description: String
  projects: [Project!]!
}
`;
const ClientSchema = `
extend type Query {
  # fetch all Clients
  #clients: [Client!]!
  client(id:ID!):Client
}

extend type Mutation {
  createClient(name:String!,description:String):Client
  #removeClient(id:ID!):Int
  updateClient(id:ID!,name:String!,description:String):Client
}
`;

module.exports = () => [ClientType, ClientSchema];
