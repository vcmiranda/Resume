import axios from './axios';

export default {
  getList() {
    return axios.get('/path');
  },
  get(param) {
    return axios.get(`/path/${param}`);
  },
  create({
    param,
    data,
  }) {
    return axios.post(`/path/${param}`, {
      data,
    });
  },
  update({
    param,
    data,
  }) {
    return axios.post(`/path/${param}`, {
      data,
    });
  },
  delete(param) {
    return axios.get(`/path/${param}`);
  },
};
