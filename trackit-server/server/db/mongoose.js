const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MDB_URI, {
    useMongoClient: true
  });
  const db = mongoose.connection;

  return new Promise((resolve, reject) => {
    db.on("open", () => {
      const models = require("./models");
      resolve({ mongoose, ...models });
    });
    db.on("error", err => reject("MongoDB Connection Failed"));
  });
};
