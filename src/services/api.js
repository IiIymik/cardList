import axios from 'axios';

axios.defaults.baseURL = 'https://nodejs-phonebook-rest-api.herokuapp.com/api/';

export const fetchData = async () => {
  const params = `data/cards`;
  const response = await axios.get(`${params}`);
  return response.data.data.result
};
