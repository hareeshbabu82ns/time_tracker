const should = require("chai").should();

module.exports = describe("Tracks Test", function() {
  it("should already been connected to db", function() {
    should.exist(this.mdb);
  });
});
