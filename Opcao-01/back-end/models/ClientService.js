const connection = require('./connection');

const getAll = async () => {
  const [client] = await connection.execute(
    'SELECT * FROM clients;',
  );
  return client;
};

const getByCpf = async (cpf) => {
  const [client] = await connection.execute(
    'SELECT id, name, gender, birth_date FROM clients WHERE cpf = ?', [cpf],
  );
  return client;
};

const getById = async (id) => {
  const [clientId] = await connection.execute(
    'SELECT name, gender, cpf, birth_date FROM clients WHERE id = ?', [id],
  );
  return clientId;
};

const createOne = async (name, gender, cpf, birthDate) => {
  const convertedDate = new Date(birthDate);
  const client = await getByCpf(cpf);
  if (client.length !== 0) return false;
  await connection.execute(
    'INSERT INTO clients (name, gender, cpf, birth_date) VALUES(?, ?, ?, ?)',
    [name, gender, cpf, convertedDate],
  );
  return true;
};

module.exports = {
  getAll,
  getById,
  createOne,
  getByCpf,
};
