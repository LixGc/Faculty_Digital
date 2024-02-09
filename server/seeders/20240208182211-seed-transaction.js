"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transactions = require("../dummy-data/transaction.json");
    const transactionData = transactions.map((el) => {
      el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Transactions", transactionData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
