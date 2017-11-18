const TrackType = `
# Track of the Task
type Track {
  id: ID!
  task: Task!
  startedAt: Int
  startingComments: String
  endedAt: Int
  endingComments: String
  duration: Int
}
`;
const TrackSchema = `
extend type Query {
  # fetch all Tracks
  tracks: [Track!]!
  track(id:ID!):Track
}

extend type Mutation {
  createTrack(data:TrackCreateInput!):Track
  removeTrack(id:ID!):Int
  updateTrack(data:TrackUpdateInput!):Track
}

input TrackCreateInput {
  taskId:ID!
  startedAt: Int
  startingComments: String
  endedAt: Int
  endingComments: String
}
input TrackUpdateInput {
  id:ID!
  taskId:ID
  startedAt: Int
  startingComments: String
  endedAt: Int
  endingComments: String
}
`;

module.exports = () => [TrackType, TrackSchema];
