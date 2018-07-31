/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import appAPI from '@/api/api.app';

// Mutations
const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_SUBJECT = 'SET_SUBJECT';
const SET_MESSAGE = 'SET_MESSAGE';

// Actions
const SEND_EMAIL = 'SEND_EMAIL';

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
  [SEND_EMAIL]({ state }) {
    const data = {
      name: state.name,
      _replyto: state.email,
      email: state.email,
      _subject: state.subject,
      message: state.message,
    };
    return appAPI.sendEmail(data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
