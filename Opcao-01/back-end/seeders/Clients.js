module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Clients',
      [{
        id: 1,
        name: 'Lewis Hamilton',
        gender: 'Male',
        cpf: '11122233344',
        birthDate: '1992/05/06',
        role: 'adm',
        email: 'adm@email.com',
        password: '123456',
      },
      {
        id: 2,
        name: 'Mary Jane',
        gender: 'Female',
        cpf: '22233344455',
        birthDate: '2000/05/06',
        email: 'client@email.com',
        password: '123456',
        role: 'client',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
