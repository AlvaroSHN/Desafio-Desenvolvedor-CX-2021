const Rental = (sequelize, DataTypes) => {
  const rental = sequelize.define('Rental', {
    movieId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    rental_date: DataTypes.DATE,
  }, { timestamps: false });

  rental.associate = (models) => {
    rental.belongsTo(
      models.Client, { as: 'clients', foreignKey: 'clientId' },
      models.Movie, { as: 'movies', foreignKey: 'movieId' },
    );
  };

  return rental;
};

module.exports = Rental;
