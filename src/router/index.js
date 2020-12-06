import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cart",
    component: Cart,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;