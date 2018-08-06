import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
  theme: {
    primary: '#3A393B',
    secondary: '#1976D2',
    terciary: '#FF9800',
    accent: '#11ABB0',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  iconfont: 'mdi' || 'fa' || 'fab',
});
