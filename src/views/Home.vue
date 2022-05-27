<template>
  <div class="home">
    <Header @on-delete-car-cart="onDeleteCarCart($event)" />
    <CarList
      :gettersCarList="gettersCarList"
      @on-set-cart="onSetCart($event)"
      @on-car-detail="onCarDetail($event)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// @ is an alias to /src
import Header from "@/components/Header.vue";
import CarList from "@/components/CarList.vue";

export default {
  name: "Home",
  components: {
    Header,
    CarList,
  },
  computed: {
    ...mapGetters({
      gettersCarList: "cars/gettersCarList",
    }),
  },
  mounted() {
    this.carList();
  },
  methods: {
    ...mapActions({
      getCarList: "cars/getCarList",
      setCarCart: "cars/setCarCart",
      setCarCartDelete: "cars/setCarCartDelete",
    }),
    async carList() {
      await this.getCarList();
    },
    onSetCart(item) {
      this.setCarCart(item);
    },
    onCarDetail(item) {
      this.$router.push({ name: "Detail", params: { id: item.id } });
    },
    onDeleteCarCart(item) {
      this.setCarCartDelete(item);
    },
  },
};
</script>
