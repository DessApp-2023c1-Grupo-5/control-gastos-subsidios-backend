import express from 'express';
import compras from './compras';
import usuarios from './usuarios';
import proyectos from './proyectos';
const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/compras', compras);
router.use('/api/proyectos', proyectos);

export default router;
