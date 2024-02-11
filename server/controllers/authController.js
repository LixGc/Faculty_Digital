const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
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
  static async googleLogin(req, res, next) {
    try {
      const { google_token } = req.headers;
      const client = new OAuth2Client();
      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const [user, isCreated] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "ThisIsRandomPassword123!(So when it is being compared with real password will always result in false)",
        },
        hooks: false,
      });
      const access_token = signToken({
        id: user.id,
      });
      let status = 200;
      if (isCreated) {
        status = 201;
      }
      res.status(status).json({ access_token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = AuthController;
