import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefono: DataTypes.STRING,
  password: DataTypes.STRING,
  rol: DataTypes.ENUM('administrador_global', 'administrador_normal', 'usuario'),
  foto: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'usuarios',
});

export default Usuario;
