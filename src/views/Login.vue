<template>
  <div class="w-50 m-auto mt-4 border rounded p-4">
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
      <div class="col-sm-10">
        <input
          type="email"
          class="form-control"
          id="inputEmail3"
          v-model="login.userName"
        />
        <small v-if="!$v.login.userName.required" class="form-text text-danger"
          >*Bu alan zorunludur</small
        >
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input
          type="password"
          class="form-control"
          id="inputPassword3"
          v-model="login.password"
        />
        <small v-if="!$v.login.password.required" class="form-text text-danger"
          >*Bu alan zorunludur</small
        >
      </div>
    </div>
    <div class="w-100 d-flex align-items-center justify-content-center">
      <button class="btn btn-primary text-center" @click="signIn">
        Sign in
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      login: {
        userName: "",
        password: "",
      },
    };
  },
  validations: {
    login: {
      userName: { required },
      password: { required },
    },
  },
  methods: {
    ...mapActions({
      setLogin: "auth/setLogin",
    }),
    async signIn() {
      if (this.$v.$invalid) {
        return;
      }
      const res = await this.setLogin(this.login);
      if (res.success) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
