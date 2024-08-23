import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Listado de detalles de pagos');
});

router.post('/', (req, res) => {
  res.send('Registrar un nuevo detalle de pago');
});

export default router;
