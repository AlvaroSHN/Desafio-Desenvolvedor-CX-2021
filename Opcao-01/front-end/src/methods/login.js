const urlLogin = 'http://localhost:3001/client';

const login = async (client) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client,
    }),
  };

  const apiRequest = await fetch(urlLogin, postMethod);
  const apiResponse = await apiRequest.json();
  localStorage.setItem('client', JSON.stringify(apiResponse));
  return apiResponse;
};

export default login;
