import axios from 'axios';

const baseURL = 'https://api.sendgrid.com/v3/mail'; // eslint-disable-line

export default axios.create({
  baseURL,
  timeout: 10000,
});
