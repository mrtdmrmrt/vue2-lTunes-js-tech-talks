const mutations = {
  SET_LOGIN(state, payload) {
    state.isLogin = true;
    state.loginUser = payload;
  },
  SET_LOGOUT(state) {
    state.isLogin = false;
    state.loginUser = {};
  },
};
export default mutations;
