const urlRegister = 'http://localhost:3001/register';

const register = async (client) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client,
    }),
  };

  const apiRequest = await fetch(urlRegister, postMethod);
  const apiResponse = await apiRequest.json();
  console.log('resposta apiresponse do registro', apiResponse)
  localStorage.setItem('client', JSON.stringify(apiResponse.client));
  return apiResponse;
};

export default register;
