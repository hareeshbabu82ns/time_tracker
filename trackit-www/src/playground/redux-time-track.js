import databaseRef from "../firebase/firebase";

const masterRecords = {
  task: {
    id: "unique_id",
    name: "task_name",
    project: "project_id",
    background: true | false
  },
  project: {
    id: "unique_id",
    name: "project_name",
    client: "client_id",
    cost: 99, //cost per time period
    costTimeFrame: "hour", //hour, min, second
    description: "about project"
  },
  client: {
    id: "unique_id",
    name: "client_name",
    description: "about client"
  }
};
const transactionRecords = {
  task_tracks: {
    task: "task_id",
    startedAt: 3333, //timestamp
    startingComments: "expecting to complete?",
    endedAt: 4444, //timestamp
    endingComments: "acomplished in task?"
  }
};
