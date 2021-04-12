const Client = (sequelize, DataTypes) => {
  const client = sequelize.define('Client', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  }, { timestamps: false });

  client.associate = (models) => {
    // client.hasMany(models.Client, { as: 'movies', foreignKey: 'movieId' });
    client.belongsTo(models.Movie, { as: 'movie', foreignKey: 'movieId' });
  };

  return client;
};

module.exports = Client;
