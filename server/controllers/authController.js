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

  static async login(req, res, next) {}
  static async googleLogin(req, res, next) {}
}
module.exports = AuthController;
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/google-login", AuthController.googleLogin);
