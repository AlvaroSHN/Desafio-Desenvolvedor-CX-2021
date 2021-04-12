module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Rentails',
      [{
        movieId: 1,
        clientId: 1,
        quantity: 1,
        rental_date: '2021/04/12',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Rentails', null, {});
  },
};
