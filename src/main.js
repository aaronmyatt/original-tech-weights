import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
