import { $axios } from "../plugins/axios";
export const carService = {
  carList,
  carDetail,
  carRez,
};
async function carList() {
  const result = await $axios.get("/cars");
  return result;
}
async function carDetail(id) {
  const result = await $axios.get(`/cars/${id}`);
  return result;
}
async function carRez(data) {
  const result = await $axios.post(
    "/rez",
    { ...data },
    {
      "Content-Type": "application/json",
    }
  );
  return result;
}
