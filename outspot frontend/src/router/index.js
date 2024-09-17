import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/users/pages/HomePage.vue";
import AddPlace from "@/places/pages/AddPlace.vue";
import UserDetailPage from "@/users/pages/UserDetailPage.vue";
import PlaceDetailsPage from "@/places/pages/PlaceDetailsPage.vue";
// import UserAuthentication from "@/users/pages/UserAuthentication.vue";
import UserAuthenticationPage from "@/users/pages/UserAuthenticationPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/places/new",
    name: "AddPlace",
    component: AddPlace,
  },
  {
    path: "/users/:id",
    name: "UserDetailPage",
    component: UserDetailPage,
  },
  {
    path: "/places/:id",
    name: "PlaceDetailsPage",
    component: PlaceDetailsPage,
  },
  {
    path: "/auth",
    name: "UserAuthentication",
    component: UserAuthenticationPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
