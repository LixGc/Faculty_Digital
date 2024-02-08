"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "This email already existed!",
        },
        validate: {
          notEmpty: {
            msg: "Email can't be empty!",
          },
          notNull: {
            msg: "Email can't be empty!",
          },
          isEmail: {
            msg: "Email format isn't valid!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please type your password",
          },
          notEmpty: {
            msg: "Please type your password",
          },
          len: {
            args: [8],
            msg: "Minimum password character is 8",
          },
          isStrongPassword(value) {
            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(value)) {
              throw "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((el) => {
    el.password = hashPassword(el.password);
  });
  return User;
};
