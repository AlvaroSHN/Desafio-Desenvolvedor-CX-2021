const baseURL = 'http://localhost:3001/movie';

const fetchMovies = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default fetchMovies;
