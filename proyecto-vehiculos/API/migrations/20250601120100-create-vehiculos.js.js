export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vehiculos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM('pickup', 'sedán', 'SUV', 'hatchback', 'camioneta'),
        allowNull: false
      },
      año: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.ENUM('disponible', 'asignado'),
        defaultValue: 'disponible'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vehiculos');
  }
};
