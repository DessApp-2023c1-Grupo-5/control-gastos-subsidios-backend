import express from 'express';

import {
  getProyecto,
  getProyectoById,
  createProyecto,
  getAllProyectos,
} from '../controllers/proyecto_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(getProyecto));
router.post('/findByName', withErrorHandling(getProyectoById));
router.post('/create', withErrorHandling(createProyecto));
router.post('/findAll', withErrorHandling(getAllProyectos));

export default router;
