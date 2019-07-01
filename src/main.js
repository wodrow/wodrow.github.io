import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Config from './configs/Config.vue'
Vue.use(Config);
Vue.prototype.Config = Config;

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: Config.amap_key
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
