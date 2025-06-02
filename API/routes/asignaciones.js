import express from 'express';
import { asignarVehiculo, obtenerAsignacionesPorUsuario, obtenerTodasAsignaciones } from '../controllers/asignacionController.js';
import { verificarJWT } from '../middlewares/authMiddleware.js';
import { esAdmin } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', verificarJWT, esAdmin, asignarVehiculo);
router.get('/usuario', verificarJWT, obtenerAsignacionesPorUsuario);
router.get('/admin', verificarJWT, esAdmin, obtenerTodasAsignaciones);

export default router;
