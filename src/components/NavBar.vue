<template>
  <div>
    <b-navbar class="navbar-custom bg-transparent" type="dark">
      <b-navbar-brand href="#">NepeStock</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button
            variant="outline-light"
            size="sm"
            class="my-2 my-sm-0 mr-2"
            pill
            >Iniciar sesión</b-button
          >
          <b-button variant="primary" size="sm" class="my-2 my-sm-0" pill
            >Registrarse</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped>
.navbar-custom{
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>
