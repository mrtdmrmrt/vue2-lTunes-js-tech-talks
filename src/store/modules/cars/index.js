import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

export const cars = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
