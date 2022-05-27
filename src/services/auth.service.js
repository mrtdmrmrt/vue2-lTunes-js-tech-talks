import { $axios } from "../plugins/axios";
export const authService = {
  login,
};
async function login() {
  const result = await $axios.get("/login");
  return result;
}
