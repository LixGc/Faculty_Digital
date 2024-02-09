"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Transaction);
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "This product already existed!",
        },
        validate: {
          notEmpty: {
            msg: "Name can't be empty!",
          },
          notEmpty: {
            msg: "Name can't be empty!",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Category can't be empty!",
          },
          notEmpty: {
            msg: "Category can't be empty!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Price can't be empty!",
          },
          notEmpty: {
            msg: "Price can't be empty!",
          },
          min: {
            args: [1],
            msg: "Price must be at least $1!",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Stock can't be empty!",
          },
          notEmpty: {
            msg: "Stock can't be empty!",
          },
        },
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Image can't be empty!",
          },
          notEmpty: {
            msg: "Image can't be empty!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
