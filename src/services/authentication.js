import axios from 'axios';

export const authentication = (user, password) => {
  const apiURL = `${process.env.REACT_APP_API_URL}/login`;
  return axios.post(apiURL, { user, password }).then(res => res.data);
};
