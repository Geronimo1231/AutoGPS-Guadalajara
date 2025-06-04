import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Vehiculo = sequelize.define('vehiculo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  marca: DataTypes.STRING,
  modelo: DataTypes.STRING,
  año: DataTypes.INTEGER,
  estado: DataTypes.ENUM('disponible', 'asignado'),
  tipo: DataTypes.STRING,
  imagen: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'vehiculos',
});

export default Vehiculo;
