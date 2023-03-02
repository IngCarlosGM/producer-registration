import axios from 'axios';

const body = {
  requestHeader: {
    client: 'Daniel',
    ipAdress: '192.168.200.110',
    userName: 'hyela',
    sessionID: '1934912347974',
    requestID: '9387429347192347',
    activeRecord: 1,
  },
  requestBody: {
    docNumber: '',
    name: '*',
    phoneNumber: '',
  },
};

export const producers = () => {
  const apiURL = `${process.env.REACT_APP_API_URL}/repauthpro`;
  const token = localStorage.getItem('token');
  return axios
    .post(apiURL, body, {
      headers: {
        'content-type': 'text/json',
        token,
      },
    })
    .then(res => res.data);
};
