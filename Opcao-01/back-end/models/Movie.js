const Movie = (sequelize, DataTypes) => {
  const movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    storyline: DataTypes.STRING,
    rating: DataTypes.DECIMAL(10, 2),
    imagePath: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });

  movie.associate = (models) => {
    // movie.belongsTo(models.Client, { as: 'client', foreignKey: 'movieId' });
    movie.hasMany(models.Client, { as: 'movies', foreignKey: 'movieId' });
  };

  return movie;
};

module.exports = Movie;
