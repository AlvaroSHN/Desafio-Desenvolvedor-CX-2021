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
    client.hasMany(models.Rental, { as: 'clients', foreignKey: 'clientId' });
  };

  return client;
};

module.exports = Client;
