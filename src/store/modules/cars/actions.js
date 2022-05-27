import { carService } from "../../../services";
const actions = {
  async getCarList(vuexContext) {
    const res = await carService.carList();
    vuexContext.commit("SET_CAR_LIST", res.data);
    return res.data;
  },
  async setCarCart(vuexContext, data) {
    vuexContext.commit("SET_CAR_CART", data);
  },
  async setCarDetail(vuexContext, data) {
    const res = await carService.carDetail(data);
    vuexContext.commit("SET_CAR_DETAIL", res.data);
    return res.data;
  },
  async setCarCartDelete(vuexContext, data) {
    vuexContext.commit("SET_CAR_CART_DELETE", data);
  },
};
export default actions;
