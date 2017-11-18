const mockData = [
  {
    data: {
      name: "ATB",
      description: "Alberta Tresary Bank"
    },
    projects: [
      {
        data: {
          name: "Lending Reimagined",
          description: "Loans < 250K"
        },
        tasks: [
          {
            data: {
              name: "GetPartnerData",
              description: "Get BP header data"
            }
          },
          {
            data: {
              name: "GetBusinessInformation",
              description: "Get Additional Business Information"
            }
          }
        ]
      }
    ]
  }
];

const createMockData = async ({ mongoose, Client, Project, Task, Track }) => {
  await Promise.all(
    mockData.map(async client => {
      const newClient = new Client(client.data);
      await newClient.save();
      client.data = newClient;

      await Promise.all(
        client.projects.map(async project => {
          project.data.clientId = client.data._id;
          const newProject = new Project(project.data);
          await newProject.save();
          project.data = newProject;

          await Promise.all(
            project.tasks.map(async task => {
              task.data.projectId = project.data._id;
              const newTask = new Task(task.data);
              await newTask.save();
              task.data = newTask;
            })
          );
        })
      );
    })
  );
  return mockData;
};
module.exports = createMockData;
