const baseURL = 'http://localhost:3001/movie';

const updateMovie = async (movie) => {
  const putMethod = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie,
    }),
  };
  const apiRequest = await fetch(`${baseURL}/${movie.id}`, putMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default updateMovie;
