// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './assets/js/global'
import MuseUI from 'muse-ui';
import store from "./vuex/index.js";
import axios from "axios"
import 'muse-ui/dist/muse-ui.css';
Vue.prototype.axios = axios;
Vue.use(MuseUI);
Vue.config.productionTip = false
Vue.prototype.global = global
/* eslint-disable no-new */
if(global.isApp){
  window.apiready = function () {
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
}else{
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}
