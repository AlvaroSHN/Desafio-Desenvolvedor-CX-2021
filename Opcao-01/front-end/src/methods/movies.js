const baseURL = 'http://localhost:3001/movie';

const fetchMovies = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

const deleteMovieById = async (id) => {
  //falar no header que é delete
  const apiRequest = await fetch(`${baseURL}/${id}`);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default fetchMovies;
