import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/store.app';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
  },
});

export default store;
