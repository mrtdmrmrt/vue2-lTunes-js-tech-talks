import { carService } from "../../../services";
import state from "./state";

const actions = {
  async getCarList(vuexContext) {
    const res = await carService.carList();
    vuexContext.commit("SET_CAR_LIST", res.data);
    return res.data;
  },
  async setCarCart(vuexContext, data) {
    if (state.carCart.filter((car) => car.id == data.id).length == 0) {
      vuexContext.commit("SET_CAR_CART", data);
      return {
        ...data,
        success: true,
      };
    } else {
      return {
        ...data,
        success: false,
      };
    }
  },
  async setCarDetail(vuexContext, data) {
    const res = await carService.carDetail(data);
    vuexContext.commit("SET_CAR_DETAIL", res.data);
    return res.data;
  },
  async setCarCartDelete(vuexContext, data) {
    vuexContext.commit("SET_CAR_CART_DELETE", data);
  },
  async setCarRez(vuexContext, data) {
    const res = await carService.carRez(data);
    vuexContext.commit("SET_CAR_REZ", res.data);
    return res;
  },
};
export default actions;
