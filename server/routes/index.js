const router = require("express").Router();
const product = require("./productRoute");
const auth = require("./authRoute");
router.use("/product", product);
router.use("/auth", auth);

module.exports = router;
