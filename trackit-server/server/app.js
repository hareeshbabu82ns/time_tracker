const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

// This package automatically parses JSON requests.
const bodyParser = require("body-parser");

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const schema = require("./gql");

const mongoDB = require("./db/mongoose");

require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "dev"}` });

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect to DB
    const db = await mongoDB();

    //create express server
    const app = express();
    app.use(bodyParser.json());

    // dynamically adjust GraphQLExpress Context
    const buildGQLOptions = async (req, res) => {
      return {
        context: { db }, //this will be passed to all resolvers
        schema
      };
    };
    //configure GraphQL server to work with Express
    app.use(
      "/graphql",
      cors(), // to allow Cross Origin requests from Frontend Clients
      bodyParser.json(),
      // graphqlExpress({ context: { db }, schema }) //pass DB instance to GraphQL context
      graphqlExpress(buildGQLOptions)
    );

    //enable GraphiQL for Playground
    app.get(
      "/graphiql",
      graphiqlExpress({
        endpointURL: "/graphql",
        passHeader: `'Authorization': 'bearer hash-h@g.com'` //pass the request headders
      })
    );

    // app.post("/clients", (req, res) => {
    //   console.log(req.body);
    //   const Client = mongoose.model("Client");
    //   const newClient = new Client(req.body);
    //   newClient
    //     .save()
    //     .then(resp => {
    //       res.send(JSON.stringify(resp, undefined, 2));
    //     })
    //     .catch(err => res.status(400).send(JSON.stringify(err, undefined, 2)));
    // });

    //start listening
    app.listen(PORT, () => {
      console.log(`Time Tracker GraphQL server running on port ${PORT}.`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

// const promise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data");
//     }, 3000);
//   }).then(data => {
//     console.log("within promise");
//     return data;
//   });
// };
// promise().then(data => {
//   console.log("after promise", data);
// });
