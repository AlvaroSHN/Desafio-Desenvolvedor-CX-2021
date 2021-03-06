module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Movies',
      [
        {
          id: 1,
          title: 'Kingsglaive',
          subtitle: 'Final Fantasy XV',
          storyline: 'O obscuro império de Niflheim não pretende parar diante de nada até invadir o reino de Lucis e conseguir o cristal sagrado. Regis, o rei de Lucis, comanda a força de elite de soldados chamada Kingsglaive para deter o avanço imperial de Niflheim.',
          rating: 4.5,
          imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91WGW1i0OZL._AC_SL1500_.jpg',
          genre: 'action',
          director: 'Takeshi Nozue',
          quantity: 10,
        },
        {
          id: 2,
          title: 'Final Fantasy',
          subtitle: 'Spirits Within',
          storyline: 'Borrar as linhas entre a realidade e a animação por computador. Este é o primeiro filme de longa-metragem que traz uma realidade sem igual, gerada por computador, de personagens humanos.',
          rating: 4.5,
          imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91d0hQnYKnL._AC_SL1500_.jpg',
          genre: 'fantasy',
          director: 'Takeshi Nozue',
          quantity: 10,
        },
        {
          id: 3,
          title: 'Ghost In The Shell',
          subtitle: 'Ghost In The Shell',
          storyline: 'Em um mundo pós-2029, cérebros se fundem facilmente a computadores e a tecnologia está em todos os lugares. Motoko Kusanagi é uma ciborgue com experiência militar que comanda um esquadrão de elite especializado em combater crimes cibernéticos.',
          rating: 5,
          imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61znrG17sAL._AC_SX342_.jpg',
          genre: 'fantasy',
          director: 'Rupert Sanders',
          quantity: 10,
        },
        {
          id: 4,
          title: 'Appleseed Alpha',
          subtitle: 'Appleseed Alpha',
          storyline: 'Depois de uma guerra devastadora, a ousada Deunan e o cyborg Briareos devem pagar uma dívida ao vilão Two-Horns, cumprindo trabalhos de mercenários. Mas no caminho se encontrarão com Olson e Iris que os encaminharão para uma missão maior.',
          rating: 3.8,
          imagePath: 'https://m.media-amazon.com/images/M/MV5BMTgzMDY2Njc4Nl5BMl5BanBnXkFtZTgwNTEyMjUzMjE@._V1_.jpg',
          genre: 'action',
          director: 'Shinji Aramaki',
          quantity: 10,
        },
        {
          id: 5,
          title: 'Resident Evil',
          subtitle: 'Vendetta',
          storyline: 'Alice e Rain Ocampo têm a missão de destruir um laboratório genético operado pela poderosa corporação Umbrella, um dos maiores conglomerados do mundo, onde um vírus foi disseminado e transforma todas as suas vítimas em zumbis. ',
          rating: 4.2,
          imagePath: 'https://i.pinimg.com/originals/08/13/77/0813776c75c31342bbf48ac0732a602c.jpg',
          genre: 'suspense',
          director: 'Shinji Aramaki',
          quantity: 10,
        },
      ], { timestamps: false });

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
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
