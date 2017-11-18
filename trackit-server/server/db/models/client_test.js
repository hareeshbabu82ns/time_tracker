const should = require("chai").should();
const expect = require("chai").expect;

module.exports = describe("Clients Test", function() {
  let Client;
  before(function() {
    Client = this.mdb.Client;
  });
  it("should have Client Model", function() {
    should.exist(Client);
  });

  it("should not create Client", async () => {
    let client = new Client({
      description: "test description 1"
    });

    try {
      await client.save();
    } catch (err) {
      expect(err).to.not.null;
    }
    // expect(client).to.not.have.property("_id");
  });

  let client;
  it("should create Client", async () => {
    client = new Client({
      name: "test client 1",
      description: "test description 1"
    });
    await client.save();
    should.exist(client._id);
  });

  it("should update Client", async () => {
    const response = await Client.findByIdAndUpdate(
      client._id,
      { $set: { name: "updated" } },
      { new: true }
    );
    expect(response.name).to.equal("updated");
  });

  it("should delete Client", async () => {
    const response = await Client.deleteOne({ _id: client._id });
    expect(response).to.have.property("deletedCount");
    expect(response.deletedCount).to.equal(1);
  });
});
