import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';
window._ = require('lodash');
Vue.config.productionTip = false


const axios = require('axios');
axios.defaults.baseURL = 'http://food-order-tracker.development/api/';
Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app');
