<template>
  <div>
    <div class="mb-3">
      <label for="Username" class="form-label">Username</label>
      <input
        v-model="userInfo.userName"
        disabled
        class="form-control"
        id="Username"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">TC</label>
      <input
        class="form-control"
        id="exampleInputPassword1"
        v-model="formData.tc"
      />
      <small class="form-text text-danger" v-if="!$v.formData.tc.required"
        >Bu alan zorunludur!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.tc.numeric"
        >TC numerik olmalidir!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.tc.minLength"
        >TC minimum 11 karakter olmalidir!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.tc.maxLength"
        >TC maximum 11 karakter olmalidir!</small
      >
    </div>
    <div class="mb-3">
      <label for="name1" class="form-label">Name</label>
      <input class="form-control" id="name1" v-model="formData.name" />
      <small class="form-text text-danger" v-if="!$v.formData.name.required"
        >Bu alan zorunludur!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.name.minLength"
        >Isim minimum 3 karakter olmalidir!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.name.maxLength"
        >Isim maximum 7 karakter olmalidir!</small
      >
    </div>
    <div class="mb-3">
      <label for="surName1" class="form-label">Surname</label>
      <input class="form-control" id="surName1" v-model="formData.surName" />
      <small class="form-text text-danger" v-if="!$v.formData.surName.required"
        >Bu alan zorunludur!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.surName.minLength"
        >Isim minimum 3 karakter olmalidir!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.surName.maxLength"
        >Isim maximum 7 karakter olmalidir!</small
      >
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        v-model="formData.email"
      />
      <small class="form-text text-danger" v-if="!$v.formData.email.required"
        >Bu alan zorunludur!</small
      >
      <small class="form-text text-danger" v-if="!$v.formData.email.email"
        >Bu alan email formatinda olmalidir!</small
      >
    </div>
    <button class="btn btn-primary" @click="onFormSubmit">Gonder</button>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
  email,
} from "vuelidate/lib/validators";
export default {
  name: "RezForm",
  data() {
    return {
      formData: {
        tc: null,
        name: "",
        surName: "",
        email: "",
      },
    };
  },
  validations: {
    formData: {
      tc: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      name: { required, minLength: minLength(3), maxLength: maxLength(7) },
      surName: { required, minLength: minLength(3), maxLength: maxLength(7) },
      email: { email, required },
    },
  },
  props: {
    userInfo: {
      type: Object,
    },
  },
  methods: {
    onFormSubmit() {
      if (this.$v.$invalid) {
        return;
      } else {
        this.$emit("on-form-submit", this.formData);
      }
    },
  },
};
</script>

<style></style>
