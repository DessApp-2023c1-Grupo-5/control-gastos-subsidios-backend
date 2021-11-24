import express from 'express';

import {
  getCompra,
  getAllCompras,
  postCompra,
} from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/:id', withErrorHandling(getCompra));
router.get('/', withErrorHandling(getAllCompras));

router.post('/', withErrorHandling(postCompra));
export default router;
