import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
import './element-variables.scss';
// import Lodash from 'lodash';
// import Underscore from 'underscore';
// import Jquery from 'jquery';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


Vue.use(Element, { size: 'small' });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
