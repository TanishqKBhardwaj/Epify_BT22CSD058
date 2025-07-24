const Product = require('../models/product');

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json({ product_id: product._id });
  } catch (err) {
    return res.status(400).json({ message: 'Error adding product', error: err.message });
  }
};

// Update Quantity
exports.updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });

    return res.json(product);
  } catch (err) {
    return res.status(400).json({ message: 'Error updating quantity', error: err.message });
  }
};

// Get Products (Paginated)
exports.getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    return res.json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching products' });
  }
};
