module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('Clients', 'movieId', {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    references: {
      model: 'Movies',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }),

  down: async (queryInterface) => queryInterface.removeColumn('Clients', 'movieId'),
};
