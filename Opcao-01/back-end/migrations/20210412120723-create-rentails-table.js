module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Rentails', {
    movieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      primaryKey: true,
      references: {
        model: 'Movies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    clientId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      primaryKey: true,
      references: {
        model: 'Clients',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rental_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Rentails'),
};
