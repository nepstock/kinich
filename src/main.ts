import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "vue-select/dist/vue-select.css";
import "./main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
