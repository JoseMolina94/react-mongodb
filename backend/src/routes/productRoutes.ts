import express from 'express';
import {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/productController';

const router = express.Router();

router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getProductById as any)
router.put('/:id', updateProduct as any)
router.delete('/:id', deleteProduct as any)

export default router;