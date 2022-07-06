import express from 'express';

import {
  getProyecto,
  getProyectoById,
  createProyecto,
} from '../controllers/proyecto_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(getProyecto));
router.post('/findByName', withErrorHandling(getProyectoById));
router.post('/create', withErrorHandling(createProyecto));

export default router;
