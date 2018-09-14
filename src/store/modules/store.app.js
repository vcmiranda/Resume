/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

// Mutations
const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_SUBJECT = 'SET_SUBJECT';
const SET_MESSAGE = 'SET_MESSAGE';

const state = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const getters = {
};

const mutations = {
  [SET_NAME](state, value) {
    state.name = value;
  },
  [SET_EMAIL](state, value) {
    state.email = value;
  },
  [SET_SUBJECT](state, value) {
    state.subject = value;
  },
  [SET_MESSAGE](state, value) {
    state.message = value;
  },
};

const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
