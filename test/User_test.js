const { expect } = require("chai");
const db = require("../server/db");
const User = db.model("user");

describe("User model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe("column definitions and validations", () => {
    it("has a `email` field", async () => {
      const user = await User.build();
      expect(user.email).to.equal(undefined);
    });

    it("has a `address` field", async () => {
      const user = await User.build();
      expect(user.address).to.equal(undefined);
    });

    it("has a `firstName` field", async () => {
      const user = await User.build();
      expect(user.firstName).to.equal(undefined);
    });

    it("has a `lastName` field", async () => {
      const user = await User.build();
      expect(user.lastName).to.equal(undefined);
    });

    it("has a `fullName` field", async () => {
      const user = await User.build();
      expect(user.fullName).to.equal(undefined);
    });

    it("has a `password` field", async () => {
      const user = await User.build();
      expect(user.password).to.equal(undefined);
    });

    it("has a `securityClearance` field", async () => {
      const user = await User.build();
      expect(user.securityClearance).to.equal(undefined);
    });
  });
}); // end describe('User model')
