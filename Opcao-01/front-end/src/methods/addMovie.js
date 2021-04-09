const baseURL = 'http://localhost:3001/movie';

const addMovie = async (movie) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie,
    }),
  };
  const apiRequest = await fetch(baseURL, postMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default addMovie;
