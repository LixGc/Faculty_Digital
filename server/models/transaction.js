"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Product);
    }
  }
  Transaction.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      category: DataTypes.STRING,
      price: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
