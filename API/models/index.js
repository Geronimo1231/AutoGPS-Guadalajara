import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false
  }
);

// Modelos
import Usuario from './User.js';
import Vehiculo from './Vehicle.js';
import Asignacion from './Assignment.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = Usuario(sequelize);
db.Vehiculo = Vehiculo(sequelize);
db.Asignacion = Asignacion(sequelize);

// Relaciones
db.Usuario.hasOne(db.Asignacion, { foreignKey: 'usuarioId' });
db.Asignacion.belongsTo(db.Usuario, { foreignKey: 'usuarioId' });

db.Vehiculo.hasOne(db.Asignacion, { foreignKey: 'vehiculoId' });
db.Asignacion.belongsTo(db.Vehiculo, { foreignKey: 'vehiculoId' });

export default db;
