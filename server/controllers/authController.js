class AuthController {
  static async register(req, res, next) {}
  static async login(req, res, next) {}
  static async googleLogin(req, res, next) {}
}
module.exports = AuthController;
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/google-login", AuthController.googleLogin);
