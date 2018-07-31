import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import VueObserveVisibility from 'vue-observe-visibility';

import '@/assets/styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueScrollTo, {
  duration: 1000,
});
Vue.use(VueObserveVisibility);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
