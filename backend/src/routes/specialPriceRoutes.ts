import express from 'express';
import {
  getSpecialPrices,
  createSpecialPrice,
  getSpecialPriceById,
  updateSpecialPrice,
  deleteSpecialPrice
} from '../controllers/specialPriceController';

const router = express.Router();

router.get('/', getSpecialPrices)
router.post('/', createSpecialPrice)
router.get('/:id', getSpecialPriceById as any)
router.put('/:id', updateSpecialPrice as any)
router.delete('/:id', deleteSpecialPrice as any)

export default router;