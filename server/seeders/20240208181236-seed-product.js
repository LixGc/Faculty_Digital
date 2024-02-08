"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = require("../dummy-data/product.json");
    const productData = products.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Products", productData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
