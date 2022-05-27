<template>
  <div class="card mb-3">
    <img :src="carDetail.photo" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        <strong class="me-1">{{ carDetail.brand }}</strong>
        <span>{{ carDetail.model }}</span>
      </h5>
      <p class="card-text">{{ carDetail.year }}, {{ carDetail.km }} km</p>
      <p class="card-text">{{ carDetail.price }} TL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarDetail",
  props: {
    carDetail: {
      type: Object,
    },
  },
};
</script>

<style></style>
