import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuelidate from "vuelidate";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(Toasted);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
