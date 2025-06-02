import express from 'express';
import usuarioRoutes from './usuarioRoutes.js';
import vehiculoRoutes from './vehiculoRoutes.js';
import asignacionRoutes from './asignacionRoutes.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/vehiculos', vehiculoRoutes);
router.use('/asignaciones', asignacionRoutes);
router.use('/auth', authRoutes);

export default router;
