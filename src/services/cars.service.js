import { $axios } from "../plugins/axios";
export const carService = {
  carList,
  carDetail,
};
async function carList() {
  const result = await $axios.get("/cars");
  return result;
}
async function carDetail(id) {
  const result = await $axios.get(`/cars/${id}`);
  return result;
}
