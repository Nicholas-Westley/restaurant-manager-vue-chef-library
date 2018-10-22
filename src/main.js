import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';
import './axios';
window._ = require('lodash');
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    components: { App },
    template: `
        <v-app id="app">
            <App/>
        </v-app>
    `,
});
