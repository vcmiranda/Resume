import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/store.app';
import email from './modules/store.email';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
    email,
  },
});

export default store;
