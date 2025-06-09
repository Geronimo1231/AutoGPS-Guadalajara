import Usuario from '../models/User.js';
import bcrypt from 'bcryptjs';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono, password, rol } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const usuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      telefono,
      password: hashPassword,
      rol,
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Editar usuario
export const editarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, telefono, foto } = req.body;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    usuario.nombre = nombre || usuario.nombre;
    usuario.apellido = apellido || usuario.apellido;
    usuario.telefono = telefono || usuario.telefono;
    usuario.foto = foto || usuario.foto;

    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cambiar contraseña con validación
export const cambiarPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { nuevaPassword } = req.body;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    // Validar contraseña
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(nuevaPassword)) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.' });
    }

    
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(nuevaPassword, salt);

    await usuario.save();
    res.json({ message: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
