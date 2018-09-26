/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import appAPI from '../../api/api.app';

// Actions
const SEND_EMAIL = 'SEND_EMAIL';
const SNACKBAR = 'SNACKBAR';

// Mutations
const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_SUBJECT = 'SET_SUBJECT';
const SET_MESSAGE = 'SET_MESSAGE';
const SET_LOADING = 'SET_LOADING';
const SET_SNACKBAR_VISIBLE = 'SET_SNACKBAR_VISIBLE';
const SET_SNACKBAR_MESSAGE = 'SET_SNACKBAR_MESSAGE';
const SET_SNACKBAR_COLOR = 'SET_SNACKBAR_COLOR';
const SET_SNACKBAR_MULTILINE = 'SET_SNACKBAR_MULTILINE';

const state = {
  name: '',
  email: '',
  subject: '',
  message: '',
  loading: false,
  snackbar: {
    visible: false,
    color: 'accent',
    message: '',
    multiline: false,
    timeout: 6000,
  },
};

const getters = {
};

const actions = {
  [SEND_EMAIL]({ state, commit, dispatch }) {
    commit('SET_LOADING', true);
    const data = {
      service_id: 'gmail',
      template_id: 'my_receiving_emails',
      user_id: 'user_ZY1CfrfiaBFjEEkyavElJ',
      template_params: {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      },
    };
    appAPI.sendEmail(data)
      .then(() => {
        dispatch('SNACKBAR', { message: 'Thank you for your contact, I\'ll be returning to you as soon as possible.', timeout: 4000, multiline: true });
        commit('SET_LOADING', false);
      })
      .catch((err) => {
        dispatch('SNACKBAR', { message: `${err.response.data.service_error} (${err.response.status})`, color: 'error' });
        commit('SET_LOADING', false);
      });
  },
  [SNACKBAR]({ state, commit }, {
    message, color, timeout, multiline,
  }) {
    commit('SET_SNACKBAR_MESSAGE', message || state.snackbar.message);
    commit('SET_SNACKBAR_COLOR', color || state.snackbar.color);
    commit('SET_SNACKBAR_MULTILINE', multiline || state.snackbar.multiline);
    commit('SET_SNACKBAR_VISIBLE', true);
    setTimeout(() => {
      commit('SET_SNACKBAR_VISIBLE', false);
      commit('SET_SNACKBAR_COLOR', 'error');
      commit('SET_SNACKBAR_MULTILINE', false);
    }, timeout || state.snackbar.timeout);
  },
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
  [SET_LOADING](state, value) {
    state.loading = value;
  },
  [SET_SNACKBAR_VISIBLE](state, value) {
    state.snackbar.visible = value;
  },
  [SET_SNACKBAR_MESSAGE](state, value) {
    state.snackbar.message = value;
  },
  [SET_SNACKBAR_COLOR](state, value) {
    state.snackbar.color = value;
  },
  [SET_SNACKBAR_MULTILINE](state, value) {
    state.snackbar.multiline = value;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
