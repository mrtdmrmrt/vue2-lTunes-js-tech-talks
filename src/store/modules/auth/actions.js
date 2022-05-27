import { authService } from "../../../services";
const actions = {
  async setLogin(vuexContext, data) {
    const res = await authService.login();
    if (
      data.userName == res.data.userName &&
      data.password == res.data.password
    ) {
      vuexContext.commit("SET_LOGIN", res);
      return {
        ...res.data,
        success: true,
      };
    } else {
      return { success: false };
    }
  },
  async setLogout(vuexContext) {
    vuexContext.commit("SET_LOGOUT");
  },
};
export default actions;
