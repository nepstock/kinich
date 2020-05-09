<template>
  <div v-if="showNav" class="pt-5 small">
    <b-nav tabs align="center">
      <b-nav-item to="/images" exact-active-class="font-weight-bolder bg-light"
        >Carga de imágenes</b-nav-item
      >
      <b-nav-item
        to="/images-list"
        exact-active-class="font-weight-bolder bg-light"
        >Mis imágenes</b-nav-item
      >
      <b-nav-item
        to="/images-search"
        exact-active-class="font-weight-bolder bg-light"
        >Buscar imágenes</b-nav-item
      >
      <b-nav-item
        to="/my-account"
        exact-active-class="font-weight-bolder bg-light"
        >Mi cuenta</b-nav-item
      >
      <b-nav-item>Planes</b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavRoutes extends Vue {
  get showNav() {
    return this.$route.path !== "/" ? true : false;
  }
}
</script>
<style scoped>
a.bg-light:focus,
a.bg-light:hover {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
}
</style>
