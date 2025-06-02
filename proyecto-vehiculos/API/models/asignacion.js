import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario.js';
import Vehiculo from './vehiculo.js';

const Asignacion = sequelize.define('asignacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
  },
  vehiculoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Vehiculo,
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'asignaciones',
});

// Relaciones
Usuario.hasMany(Asignacion, { foreignKey: 'usuarioId' });
Asignacion.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Vehiculo.hasMany(Asignacion, { foreignKey: 'vehiculoId' });
Asignacion.belongsTo(Vehiculo, { foreignKey: 'vehiculoId' });

export default Asignacion;
