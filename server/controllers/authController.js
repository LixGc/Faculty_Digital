const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");
class AuthController {
  static async register(req, res, next) {
    try {
      const { email, password, password2 } = req.body;
      if (!password2) {
        throw { name: "empty_input" };
      }
      if (password !== password2) {
        throw { name: "Password doesn't match" };
      }
      await User.create({ email, password });
      res.status(201).json({ message: `Account succesfully created!` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "invalid_email" };
      }
      if (!password) {
        throw { name: "invalid_password" };
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: `not_valid` };
      }

      const isPasswordValid = comparePassword(password, user.password);
      if (!isPasswordValid) {
        throw { name: `not_valid` };
      }
      const access_token = signToken({ id: user.id });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
  static async googleLogin(req, res, next) {}
}
module.exports = AuthController;
