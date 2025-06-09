import express from 'express';
import { asignarVehiculo, obtenerAsignacionesPorUsuario, obtenerTodasAsignaciones } from '../controllers/AssignmentController.js';
import { verificarJWT } from '../middlewares/AuthMiddleware.js';
import { esAdmin } from '../middlewares/RoleMiddleware.js';

const router = express.Router();

router.post('/', verificarJWT, esAdmin, asignarVehiculo);
router.get('/user', verificarJWT, obtenerAsignacionesPorUsuario);
router.get('/admin', verificarJWT, esAdmin, obtenerTodasAsignaciones);

export default router;
