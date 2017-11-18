const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://admin:admin@ds151955.mlab.com:51955/time-tracker",
  (err, db) => {
    if (err) return console.log("unable to connect to MongoDB");
    console.log("connected to MongoDB");

    db
      .collection("Clients")
      .insertOne({ name: "ATB", description: "Alberta Tresary Bank" })
      .then(resp => {
        console.log(resp.ops[0]);
        db.close();
      })
      .catch(err => console.log("Error Saving Client"));
  }
);
