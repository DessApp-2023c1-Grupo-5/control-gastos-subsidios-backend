import express from 'express';
import compras from './compras';
import usuarios from './usuarios';
import proyectos from './proyectos';
import proveedores from './proveedores';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/compras', compras);
router.use('/api/proyectos', proyectos);
router.use('/api/proveedores', proveedores);
export default router;
