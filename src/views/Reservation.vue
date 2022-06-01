<template>
  <div class="container mt-4">
    <div>
      <button class="btn" @click="$router.push('/')" style="cursor: pointer">
        Ana Sayfa
      </button>
    </div>
    <div class="row">
      <div class="col-md-3">
        <CarCard
          v-for="car in gettersCarCart"
          :key="car.id"
          :car="car"
          class="mb-2"
          :isSetCart="false"
          :isCarDetail="false"
          :isDeleteCart="true"
          :isBtnCenter="true"
          @on-delete-cart="onDeleteCarCart($event)"
        />
      </div>
      <div class="col-md-9">
        <RezForm
          :userInfo="getUserLogin"
          @on-form-submit="onFormSubmit($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CarCard from "@/components/CarCard.vue";
import RezForm from "@/components/RezForm.vue";
export default {
  name: "reservation",
  components: {
    CarCard,
    RezForm,
  },
  computed: {
    ...mapGetters({
      gettersCarCart: "cars/gettersCarCart",
      getUserLogin: "auth/getUserLogin",
    }),
  },
  methods: {
    ...mapActions({
      setCarCartDelete: "cars/setCarCartDelete",
      setCarRez: "cars/setCarRez",
    }),
    onDeleteCarCart(item) {
      this.setCarCartDelete(item);
    },
    async onFormSubmit(item) {
      const res = await this.setCarRez({
        rezCars: [...this.gettersCarCart],
        ...item,
      });
      if (res.status == 201) {
        this.$toasted.success("Araç rezervasyon islemi alinmistir!", {
          position: "top-right",
          duration: 2000,
        });
        this.$router.push("/");
      } else {
        this.$toasted.error("Beklenmeyen hata olustu!", {
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },
};
</script>

<style></style>
