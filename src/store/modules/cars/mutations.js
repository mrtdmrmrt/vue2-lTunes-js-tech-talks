const mutations = {
  SET_CAR_LIST(state, payload) {
    state.carList = payload;
  },
  SET_CAR_CART(state, payload) {
    state.carCart.push(payload);
  },
  SET_CAR_DETAIL(state, payload) {
    state.carDetail = payload;
  },
  SET_CAR_CART_DELETE(state, payload) {
    state.carCart = state.carCart.filter((car) => car.id != payload.id);
  },
  SET_CAR_REZ(state, payload) {
    state.carRez = payload;
  },
};
export default mutations;
