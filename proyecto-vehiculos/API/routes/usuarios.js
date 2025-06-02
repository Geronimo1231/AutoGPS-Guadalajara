import express from 'express';
import { login, crearUsuario } from '../controllers/usuarioController.js';
import { esAdminGlobal } from '../middlewares/roleMiddleware.js';
import { verificarJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/nuevo', verificarJWT, esAdminGlobal, crearUsuario);

export default router;
