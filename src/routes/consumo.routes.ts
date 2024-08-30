import { Router } from 'express';
import {
    crearConsumo,
    obtenerConsumos,
    obtenerConsumoPorId,
    actualizarConsumo,
    eliminarConsumo
} from '../controllers/consumo.controller';

const router = Router();

router.post('/crear', crearConsumo);
router.get('/', obtenerConsumos);
router.get('/:id', obtenerConsumoPorId);
router.put('/:id', actualizarConsumo);
router.delete('/:id', eliminarConsumo);

export default router;
