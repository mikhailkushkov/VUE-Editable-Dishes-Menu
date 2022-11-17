import Vue from "vue";
import VueRouter from "vue-router";
import Dishes from "../views/Dishes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dishes",
    component: Dishes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
