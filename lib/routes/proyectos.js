import express from 'express';

import { getProyecto } from '../controllers/proyecto_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getProyecto));

export default router;
