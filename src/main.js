import Vue from "vue"
import App from "./App.vue"
import router from "./router"
//console.log(addon.hello())

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
