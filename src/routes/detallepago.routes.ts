import { Router } from 'express';
import {
    crearDetallePago,
    obtenerDetallesPago,
    obtenerDetallePagoPorId,
    actualizarDetallePago,
    eliminarDetallePago
} from '../controllers/detallepago.controller';

const router = Router();

router.post('/crear', crearDetallePago);
router.get('/', obtenerDetallesPago);
router.get('/:id', obtenerDetallePagoPorId);
router.put('/:id', actualizarDetallePago);
router.delete('/:id', eliminarDetallePago);

export default router;
