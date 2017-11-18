require("babel-register");
const should = require("chai").should();
const expect = require("chai").expect;
require("dotenv").config({ path: ".env.test" });
const mongoDB = require("./mongoose");

describe("Mongoose DB Connect", function() {
  //first run this
  before(async function() {
    //get the mongoose connection
    this.mdb = await mongoDB();
    should.equal(this.mdb.mongoose.connection.readyState, 1);
  });

  it("should be Test environment", function() {
    should.equal(process.env.NODE_ENV, "test");
    process.env.NODE_ENV.should.equal("test");
  });

  it("should create Mock Data", async function() {
    //create mock data
    this.mockData = await require("./models/mock_data")(this.mdb);
    // console.log(this.mockData);
    expect(this.mockData[0].data).to.have.property("_id");
  });

  it("should be connected to MongoDB", async function() {
    should.exist(this.mdb.mongoose);
  });

  //sub tests
  require("./models/client_test");

  //finally run this
  after(async function() {
    //delete all the mock data
    await this.mdb.mongoose.connection.db.dropDatabase();
    //close DB connection
    await this.mdb.mongoose.connection.close();
    //validate close connection
    should.equal(this.mdb.mongoose.connection.readyState, 0);
  });
});
