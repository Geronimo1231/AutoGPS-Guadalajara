import express from 'express';
import { login, crearUsuario } from '../controllers/UsersController.js';
import { esAdminGlobal } from '../middlewares/RoleMiddleware.js';
import { verificarJWT } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/nuevo', verificarJWT, esAdminGlobal, crearUsuario);

export default router;
