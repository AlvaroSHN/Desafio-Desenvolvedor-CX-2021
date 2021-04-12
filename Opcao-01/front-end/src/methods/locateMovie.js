const locateMovie = async (movie) => {
  const client = JSON.parse(localStorage.getItem('client'));
  alert('Em construção.. (console.log) ');
  console.log('Usuario:', client.name, 'Deseja alugar:', movie.title, 'Tem em estoque:', movie.quantity)
};

export default locateMovie;
