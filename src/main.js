import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueObserveVisibility from 'vue-observe-visibility';
import '@babel/polyfill';
import './plugins/axios';
import './plugins/vuetify';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  duration: 1000,
});
Vue.use(VueObserveVisibility);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
