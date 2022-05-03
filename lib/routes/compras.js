import express from 'express';

import {
  getCompra,
  getAllCompras,
  postCompra,
  getTotal,
  findByRubro,
} from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/:id', withErrorHandling(getCompra));
router.get('/', withErrorHandling(getAllCompras));
router.get('/gastos/totalGastos', withErrorHandling(getTotal));
router.get('/gastos/findByRubro', withErrorHandling(findByRubro));
router.post('/', withErrorHandling(postCompra));

export default router;
