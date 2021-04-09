module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Movies', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subtitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    storyline: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imagePath: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bookmarked: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    director: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('BlogPosts'),
};
