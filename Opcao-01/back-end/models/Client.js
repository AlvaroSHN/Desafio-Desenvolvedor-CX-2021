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

  // user.associate = (models) => {
  //   user.hasMany(models.BlogPost, { as: 'blogPosts', foreignKey: 'userId' });
  // };

  return client;
};

module.exports = Client;
