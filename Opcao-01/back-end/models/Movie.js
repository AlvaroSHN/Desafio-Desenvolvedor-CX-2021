const Movie = (sequelize, DataTypes) => {
  const movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    storyline: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    imagePath: DataTypes.STRING,
    bookmarked: DataTypes.BOOLEAN,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });

  // user.associate = (models) => {
  //   user.hasMany(models.BlogPost, { as: 'blogPosts', foreignKey: 'userId' });
  // };

  return movie;
};

module.exports = Movie;
