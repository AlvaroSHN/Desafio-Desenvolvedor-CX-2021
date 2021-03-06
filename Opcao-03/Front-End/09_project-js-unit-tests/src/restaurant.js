/* eslint-disable max-len */

const createMenu = (meuMenu) => {
  const restaurant = {
    fetchMenu: () => meuMenu,
    consumption: [],
    order: (stringAsParameter) => { restaurant.consumption.push(stringAsParameter); },
    pay: () => {
      let soma = 0;
      const menuSize = Object.keys(restaurant.fetchMenu().drink).length + Object.keys(restaurant.fetchMenu().food).length;
      restaurant.consumption.forEach((element) => {
        for (let index = 0; index < menuSize; index += 1) {
          if (element === Object.keys(restaurant.fetchMenu().food)[index]) {
            soma += parseFloat(Object.values(restaurant.fetchMenu().food)[index]);
          }
          if (element === Object.keys(restaurant.fetchMenu().drink)[index]) {
            soma += parseFloat(Object.values(restaurant.fetchMenu().drink)[index]);
          }
        }
      });
      return soma * 1.1;
    },
  };
  return restaurant;
};

const objetoInicial = { food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } };
const meuRestaurante = createMenu(objetoInicial);

const orderFromMenu = (request) => {
  meuRestaurante.order(request);
};

orderFromMenu('coxinha');
orderFromMenu('sopa');
orderFromMenu('cerveja');
orderFromMenu('coxinha');
orderFromMenu('agua');

console.log('Eu pedi: ', meuRestaurante.consumption);
console.log('Minha conta ficou em (acrescidos 10%): ', meuRestaurante.pay());

module.exports = createMenu;
