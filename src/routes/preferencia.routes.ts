import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Listado de preferencias');
});

router.post('/', (req, res) => {
  res.send('Crear una nueva preferencia');
});

export default router;
