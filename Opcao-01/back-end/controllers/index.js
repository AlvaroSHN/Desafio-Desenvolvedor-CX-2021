const client = require('./clientsController');
const movie = require('./moviesController');
const register = require('./registerController');
const rental = require('./rentailsController');

module.exports = {
  client,
  movie,
  register,
  rental,
};
