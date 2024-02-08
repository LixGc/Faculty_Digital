"use strict";

const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require("../dummy-data/user.json");
    const userData = users.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hashPassword(el.password);
      return el;
    });
    await queryInterface.bulkInsert("Users", userData, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
