import Vue from 'vue';
import Config from './config';
const axios = require('axios');
axios.defaults.baseURL = `${Config.baseUrl}/api/`;
Vue.prototype.axios = axios;
