import Vue from "vue";
import Vuex from "vuex";

import { auth, cars } from "./modules";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    cars,
  },
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
});
