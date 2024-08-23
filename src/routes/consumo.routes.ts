import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Listado de consumos');
});

router.post('/', (req, res) => {
  res.send('Registrar un nuevo consumo');
});

export default router;
