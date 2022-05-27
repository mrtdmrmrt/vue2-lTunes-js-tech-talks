import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters["auth/getIsLogin"];
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    checkPageWhenSignIn();
  }

  function checkPageWhenSignIn() {
    if (to.name === "Login") {
      if (loggedIn) {
        next({
          path: "/",
        });
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
