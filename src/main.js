import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import Axios from 'axios';
import VeeValidate from 'vee-validate';
import store from './store/store';
import i18n from './i18n';
import FlagIcon from 'vue-flag-icon';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

Axios.defaults.baseURL = "http://localhost:3000";

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
