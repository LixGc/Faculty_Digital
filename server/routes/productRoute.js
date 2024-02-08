const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/revenue", ProductController.revenue);
router.get("/products", ProductController.products);
router.get("/product-transaction", ProductController.productTransaction);
router.post("/add-product", ProductController.addProduct);
router.put("/edit-product", ProductController.editProduct);
router.delete("/delete-product", ProductController.deleteProduct);
module.exports = router;
