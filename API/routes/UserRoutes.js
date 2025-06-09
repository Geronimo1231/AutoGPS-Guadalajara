import express from 'express';
import { getUsuarios, crearUsuario, editarUsuario, cambiarPassword } from '../controllers/UsersController.js';

const router = express.Router();

router.get('/', getUsuarios);
router.post('/', crearUsuario);
router.put('/:id', editarUsuario);
router.patch('/:id/password', cambiarPassword);

export default router;
