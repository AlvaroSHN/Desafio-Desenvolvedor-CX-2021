const baseURL = 'http://localhost:3001/movie';

const locateMovie = async (movie) => {
  // const postMethod = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     movie,
  //   }),
  // };
  // const apiRequest = await fetch(baseURL, postMethod);
  // const apiResponse = await apiRequest.json();
  // return apiResponse;
  const client = JSON.parse(localStorage.getItem('client'));
  console.log('usuario', client.name)
  console.log('quer alugar', movie.title)
  console.log('clicado!')
};

export default locateMovie;
