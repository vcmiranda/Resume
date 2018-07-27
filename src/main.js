import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';

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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
