import { Router } from 'express';
import {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
} from '../controllers/cliente.controller';

const router = Router();

router.post('/crear', crearCliente);
router.get('/', obtenerClientes);
router.get('/:id', obtenerClientePorId);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

export default router;
