const router = require("express").Router();
const ProductController = require("../controllers/productController");
const loginAuthentication = require("../middlewares/loginAuthentication");

router.get("/dashboard", loginAuthentication, ProductController.dashboard);
router.post("/add-product", loginAuthentication, ProductController.addProduct);
router.put("/edit-product", loginAuthentication, ProductController.editProduct);
router.delete("/delete-product", loginAuthentication, ProductController.deleteProduct);
module.exports = router;
