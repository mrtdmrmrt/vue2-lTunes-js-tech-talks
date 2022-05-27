<template>
  <div class="custom-notification__wrapper" ref="notificationContent">
    <div class="w-100 d-flex align-items-center justify-content-end p-2">
      <i class="fa-solid fa-xmark" @click="close" style="cursor: pointer"></i>
    </div>
    <div class="custom-notification__contents">
      <div
        class="custom-notification__contents--item"
        v-for="item in notificationList"
        :key="item.id"
      >
        <div
          class="d-flex align-items-center justify-content-between p-2 w-100"
        >
          <div class="d-flex align-items-center">
            <img
              width="50"
              height="50"
              :src="item.photo"
              alt="car"
              class="me-2"
            />
            <span>{{ item.brand }}</span>
          </div>
          <i
            class="fa-solid fa-circle-minus"
            style="cursor: pointer"
            @click.stop="deleteCarCart(item)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomNotification",
  data() {
    return {};
  },
  props: {
    notificationList: {
      type: Array,
    },
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
    clickOutSide(e) {
      let el = this.$refs.notificationContent;
      let target = e.target;
      if (
        el !== target &&
        !el.contains(target) &&
        target.id != "show-notification" &&
        target.id != "show-notification-icon"
      ) {
        this.close();
      }
    },
    deleteCarCart(item) {
      this.$emit("on-delete-car-cart", item);
    },
  },
  beforeMount() {
    document.addEventListener("click", this.clickOutSide);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.clickOutSide);
  },
};
</script>

<style>
.custom-notification__wrapper {
  cursor: default;
  position: absolute;
  width: 352px;
  height: 165px;
  right: 30px;
  top: 58px;

  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;

  z-index: 10;
}
.custom-notification__contents {
  height: 130px;
  overflow-y: auto;
}
</style>
