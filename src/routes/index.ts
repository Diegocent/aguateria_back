import { Router } from 'express';
import clienteRoutes from './cliente.routes';
import consumoRoutes from './consumo.routes';
import detallePagoRoutes from './detallepago.routes';
import preferenciaRoutes from './preferencia.routes';

const router = Router();

router.use('/clientes', clienteRoutes);
router.use('/consumos', consumoRoutes);
router.use('/detalles-pago', detallePagoRoutes);
router.use('/preferencias', preferenciaRoutes);

export default router;
