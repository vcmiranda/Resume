import axios from 'axios';

// API_URL has a value injected by webpack
const baseURL = VUE_APP_API_URL; // eslint-disable-line

export default axios.create({
  baseURL,
  timeout: 10000,
});
