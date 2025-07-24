const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const auth = require('../middlewares/user');

router.post('/', auth, productController.addProduct);               // POST /products
router.put('/:id/quantity', auth, productController.updateQuantity); // PUT /products/:id/quantity
router.get('/', auth, productController.getProducts);              // GET /products

module.exports = router;
