import express from 'express';
import {
  getAsignaciones,
  crearAsignacion,
  eliminarAsignacion,
} from '../controllers/asignacionController.js';

const router = express.Router();

router.get('/', getAsignaciones);
router.post('/', crearAsignacion);
router.delete('/:id', eliminarAsignacion);

export default router;
