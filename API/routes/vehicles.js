import express from 'express';
import { listarVehiculos, crearVehiculo, eliminarVehiculo } from '../controllers/VehicleController.js';
import { verificarJWT, esAdmin } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.get('/', verificarJWT, listarVehiculos);
router.post('/', verificarJWT, esAdmin, crearVehiculo);
router.delete('/:id', verificarJWT, esAdmin, eliminarVehiculo);

export default router;
