const mutations = {
  SET_CAR_LIST(state, payload) {
    state.carList = payload;
  },
  SET_CAR_CART(state, payload) {
    if (state.carCart.filter((car) => car.id == payload.id).length == 0) {
      state.carCart.push(payload);
    }
  },
  SET_CAR_DETAIL(state, payload) {
    state.carDetail = payload;
  },
  SET_CAR_CART_DELETE(state, payload) {
    state.carCart = state.carCart.filter((car) => car.id != payload.id);
  },
};
export default mutations;
