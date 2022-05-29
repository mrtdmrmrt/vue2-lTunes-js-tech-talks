<template>
  <div class="container mt-4">
    <CarDetail :carDetail="gettersCarDetail" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CarDetail from "@/components/CarDetail.vue";
export default {
  name: "Detail",
  components: {
    CarDetail,
  },
  computed: {
    ...mapGetters({
      gettersCarDetail: "cars/gettersCarDetail",
    }),
  },
  mounted() {
    // this.$route.query.id
    this.carDetail(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      setCarDetail: "cars/setCarDetail",
    }),
    async carDetail(id) {
      await this.setCarDetail(id);
    },
  },
};
</script>

<style></style>
