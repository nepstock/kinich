import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Images from "@/views/Images.vue";
import ImagesList from "@/views/ImagesList.vue";
import ImagesSearch from "@/views/ImagesSearch.vue";
import MyAccount from "@/views/MyAccount.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/images",
    name: "Images",
    component: Images
  },
  {
    path: "/images-list",
    name: "ImagesList",
    component: ImagesList
  },
  {
    path: "/images-search",
    name: "ImagesSearch",
    component: ImagesSearch
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: MyAccount
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
