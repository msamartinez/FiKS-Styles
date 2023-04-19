const { expect } = require("chai");
const db = require("../server/db");
const Product = db.model("product");

describe("Product model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe("column definitions and validations", () => {
    it("has a `name` field", async () => {
      const product = await Product.build();
      expect(product.name).to.equal(undefined);
    });

    it("has a `imageUrl` field", async () => {
      const product = await Product.build();
      expect(product.imageUrl).to.equal(undefined);
    });

    it("has a `price` field", async () => {
      const product = await Product.build();
      expect(product.price).to.equal(undefined);
    });

    it("has a `shortDescription` field", async () => {
        const product = await Product.build();
        expect(product.shortDescription).to.equal(undefined);
        });

    it("has a `longDescription` field", async () => {
        const product = await Product.build();
        expect(product.longDescription).to.equal(undefined);
        });


    it("has a `category` field", async () => {
        const product = await Product.build();
        expect(product.category).to.equal(undefined);
        });
  });
}); // end describe('Product model')

//! edit both descritpions