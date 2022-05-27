<template>
  <div class="card m-2" style="width: 18rem">
    <img :src="car.photo" class="card-img-top" alt="car" />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ car.brand }}</strong> <span>{{ car.model }}</span>
      </h5>
      <p class="card-text">{{ car.year }}, {{ car.km }} km</p>
      <p class="card-text">{{ car.price }} TL</p>
      <div class="d-flex align-items-center justify-content-between">
        <a @click="setCart(car)" class="btn btn-primary">Sepete Ekle</a>
        <a @click="carDetail(car)" class="btn btn-primary">Detay</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    car: {
      type: Object,
    },
  },
  methods: {
    setCart(item) {
      this.$emit("on-set-cart", item);
    },
    carDetail(item) {
      this.$emit("on-car-detail", item);
    },
  },
};
</script>

<style></style>
