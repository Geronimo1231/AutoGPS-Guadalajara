import express from 'express';
import usuarioRoutes from './UserRoutes.js';
import vehiculoRoutes from './VehicleRoutes.js';
import asignacionRoutes from './Routeassignments.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/vehiculos', vehiculoRoutes);
router.use('/asignaciones', asignacionRoutes);
router.use('/auth', authRoutes);

export default router;
