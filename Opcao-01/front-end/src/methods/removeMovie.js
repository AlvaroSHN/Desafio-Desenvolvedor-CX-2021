const baseURL = 'http://localhost:3001/movie';

const deleteMovieById = async (movie) => {
  const deleteMehod = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie,
    }),
  };
  const apiRequest = await fetch(`${baseURL}/${movie.id}`, deleteMehod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default deleteMovieById;
