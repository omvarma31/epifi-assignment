import express from 'express';
import { addProduct, updateProductQuantity, getProducts } from '../controllers/product.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/products', auth, addProduct);
router.put('/products/:id/quantity', auth, updateProductQuantity);
router.get('/products', auth, getProducts);

export default router; 