import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppsView from "../views/AppsView.vue";
import AppView from "../views/AppView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/apps",
      name: "apps",
      component: AppsView,
    },
    {
      path: "/app",
      name: "app",
      component: AppView,
    },
  ],
});

export default router;
