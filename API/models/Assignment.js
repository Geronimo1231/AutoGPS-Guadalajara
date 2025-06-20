import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';
import Usuario from './User.js';
import Vehiculo from './Vehicle.js';

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
