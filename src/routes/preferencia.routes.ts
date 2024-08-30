import { Router } from 'express';
import {
    crearPreferencia,
    obtenerPreferencias,
    obtenerPreferenciaPorId,
    actualizarPreferencia,
    eliminarPreferencia
} from '../controllers/preferencia.controller';

const router = Router();

router.post('/crear', crearPreferencia);
router.get('/', obtenerPreferencias);
router.get('/:id', obtenerPreferenciaPorId);
router.put('/:id', actualizarPreferencia);
router.delete('/:id', eliminarPreferencia);

export default router;
