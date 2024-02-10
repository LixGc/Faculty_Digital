const router = require("express").Router();
const ProductController = require("../controllers/productController");
const loginAuthentication = require("../middlewares/loginAuthentication");

router.get("/revenue-dashboard", loginAuthentication, ProductController.revenue);
router.get("/product-dashboard", loginAuthentication, ProductController.product);
router.post("/add-product", loginAuthentication, ProductController.addProduct);
router.put("/edit-product/:id", loginAuthentication, ProductController.editProduct);
router.delete("/delete-product/:id", loginAuthentication, ProductController.deleteProduct);
module.exports = router;
