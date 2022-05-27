<template>
  <nav class="navbar bg-light">
    <div
      class="w-100 d-flex align-items-center justify-content-end p-3 header__right--notification"
    >
      <button
        type="button"
        class="btn btn-primary position-relative me-3"
        id="show-notification"
        @click="showNotification = !showNotification"
      >
        <i
          class="fa-solid fa-cart-shopping me-3"
          id="show-notification-icon"
        ></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ gettersCarCart.length }}
        </span>
      </button>
      <transition name="fade">
        <CustomNotification
          v-if="showNotification && gettersCarCart.length > 0"
          :notificationList="gettersCarCart"
          @close="showNotification = $event"
          @on-delete-car-cart="onDeleteCarCart($event)"
        />
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import CustomNotification from "@/components/CustomNotification.vue";
export default {
  name: "Header",
  data() {
    return {
      showNotification: false,
    };
  },
  components: {
    CustomNotification,
  },
  computed: {
    ...mapGetters({
      gettersCarCart: "cars/gettersCarCart",
    }),
  },
  methods: {
    onDeleteCarCart(item) {
      this.$emit("on-delete-car-cart", item);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.header__right--notification {
  display: flex;
  align-items: center;
  position: relative;
}
</style>
