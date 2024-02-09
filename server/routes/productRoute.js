const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/dashboard", ProductController.dashboard);
router.post("/add-product", ProductController.addProduct);
router.put("/edit-product", ProductController.editProduct);
router.delete("/delete-product", ProductController.deleteProduct);
module.exports = router;
