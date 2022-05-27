<template>
  <div class="container mt-4 d-flex flex-wrap">
    <CarCard
      v-for="car in gettersCarList"
      :key="car.id"
      :car="car"
      @on-set-cart="onSetCart($event)"
      @on-car-detail="onCarDetail($event)"
    />
  </div>
</template>

<script>
import CarCard from "@/components/CarCard.vue";
export default {
  name: "CarList",
  components: {
    CarCard,
  },
  props: {
    gettersCarList: {
      type: Array,
    },
  },
  methods: {
    onSetCart(item) {
      this.$emit("on-set-cart", item);
    },
    onCarDetail(item) {
      this.$emit("on-car-detail", item);
    },
  },
};
</script>

<style></style>
