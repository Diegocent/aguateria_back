import { Router } from 'express';
import ClienteRoutes from './cliente.routes';
import ConsumoRoutes from './consumo.routes';
import DetallePagoRoutes from './detallepago.routes';
import PreferenciaRoutes from './preferencia.routes';

const router = Router();

// Centralización de rutas
router.use('/clientes', ClienteRoutes);
router.use('/consumos', ConsumoRoutes);
router.use('/detallepagos', DetallePagoRoutes);
router.use('/preferencias', PreferenciaRoutes);

export default router;
