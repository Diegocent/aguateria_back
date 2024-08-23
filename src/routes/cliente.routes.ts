import { Router } from 'express';

const router = Router();

// Ejemplo de una ruta GET
router.get('/', (req, res) => {
  res.send('Listado de clientes');
});

// Ejemplo de una ruta POST
router.post('/', (req, res) => {
  res.send('Crear un nuevo cliente');
});

export default router;
