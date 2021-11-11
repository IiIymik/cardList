import axios from 'axios';

axios.defaults.baseURL = 'https://run.mocky.io/v3/';

export const fetchData = async () => {
  const params = `b7d36eea-0b3f-414a-ba44-711b5f5e528e`;
  const response = await axios.get(`${params}`);
  return response.data
};
