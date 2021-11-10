import express from 'express';

import { getCompras } from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getCompras));

export default router;
