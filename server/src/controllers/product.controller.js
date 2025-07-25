import Product from '../models/product.model.js';

export const addProduct = async (req, res) => {
  const { name, type, sku, image_url, description, quantity, price } = req.body;
  if (!name || !type || !sku || quantity == null || price == null) {
    return res.status(400).json({ message: 'Missing required product fields.' });
  }
  try {
    const existing = await Product.findOne({ sku });
    if (existing) {
      return res.status(409).json({ message: 'SKU already exists.' });
    }
    const product = new Product({ name, type, sku, image_url, description, quantity, price });
    await product.save();
    res.status(201).json({ message: 'Product added successfully.', product });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const updateProductQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  if (quantity == null) {
    return res.status(400).json({ message: 'Quantity is required.' });
  }
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    res.json({ message: 'Product quantity updated.', product });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  try {
    const products = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();
    res.json({
      page,
      limit,
      total,
      products
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};  