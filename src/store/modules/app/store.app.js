/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

// Mutations
const SET_SECTOR = 'SET_SECTOR';

const state = {
  sector: 'banner',
};

const getters = {
};

const mutations = {
  [SET_SECTOR](state, value) {
    state.sector = value;
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
