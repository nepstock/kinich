import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Images from "@/views/Images.vue";
import ImagesList from "@/views/ImagesList.vue";
import ImagesSearch from "@/views/ImagesSearch.vue";
import MyAccount from "@/views/MyAccount.vue";
import ImagesEdit from "@/views/ImagesEdit.vue";
import ImagesDownload from "@/views/ImagesDownload.vue";
import Profile from "@/views/childs/Profile.vue";
import Plan from "@/views/childs/Plan.vue";
import Payments from "@/views/childs/Payments.vue";
import MethodPay from "@/views/childs/MethodPay.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: MyAccount,
    children: [
      {
        path: "/my-account/profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "/my-account/plains",
        name: "Plan",
        component: Plan
      },
      {
        path: "/my-account/upload/images",
        name: "UploadImages",
        component: ImagesList
      },
      {
        path: "/my-account/downloads",
        name: "Downloads",
        component: ImagesSearch
      },
      {
        path: "/my-account/images-download/:id",
        name: "ImagesDownload",
        component: ImagesDownload
      },
      {
        path: "/my-account/upload",
        name: "Upload",
        component: Images
      },
      {
        path: "/my-account/upload/images/:id",
        name: "ImagesEdit",
        component: ImagesEdit
      },
      {
        path: "/my-account/payment-method/",
        name: "MethodPay",
        component: MethodPay
      },
      {
        path: "/my-account/payments",
        name: "Payments",
        component: Payments
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
