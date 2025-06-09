import express from 'express';
import {
  getVehiculos,
  crearVehiculo,
  editarVehiculo,
  eliminarVehiculo,
} from '../controllers/VehicleController.js';

const router = express.Router();

router.get('/', getVehiculos);
router.post('/', crearVehiculo);
router.put('/:id', editarVehiculo);
router.delete('/:id', eliminarVehiculo);

export default router;
