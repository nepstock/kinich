<template>
  <b-overlay :show="showOverlay" opacity="0.65">
    <div class="bg-light">
      <section class="vertical-h80">
        <b-container class="text-left" fluid>
          <b-row class="justify-content-center">
            <b-col sm="3" md="2" class="sidebar pt-4">
              <b-nav vertical small class="w-100">
                <b-nav-item :to="{ name: 'Profile' }" exact
                  ><i class="fas fa-user mr-2"></i>Mi perfil</b-nav-item
                >
                <b-nav-item :to="{ name: 'Plan' }" exact
                  ><i class="fas fa-dollar-sign mr-2"></i>Mi plan</b-nav-item
                >
                <b-nav-item :to="{ name: 'Downloads' }" exact
                  ><i class="fas fa-file-download mr-2"></i>Mis
                  descargas</b-nav-item
                >
                <b-nav-item :to="{ name: 'UploadImages' }" exact
                  ><i class="fas fa-file-image mr-2"></i>Mis cargas</b-nav-item
                >
                <b-nav-item :to="{ name: 'Payments' }" exact
                  ><i class="fas fa-file-invoice-dollar mr-2"></i
                  >Facturación</b-nav-item
                >
                <b-nav-item :to="{ name: 'MethodPay' }" exact
                  ><i class="far fa-credit-card mr-2"></i>Forma pago</b-nav-item
                >
                <b-nav-item :to="{ name: 'Upload' }" exact
                  ><i class="fas fa-cloud-upload-alt mr-2"></i>Subir una
                  imagen</b-nav-item
                >
              </b-nav>
            </b-col>
            <b-col sm="9" md="10">
              <div class="main-content py-4 mt-2">
                <router-view></router-view>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </b-overlay>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyAccount extends Vue {
  showOverlay = true;

  created() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1500);
  }
}
</script>

<style scoped>
.sidebar {
  height: calc(100vh - 56px);
  background: #000;
}
.main-content {
  height: calc(100vh - 76px);
  overflow-y: auto;
  overflow-x: hidden;
}
.nav-link.router-link-exact-active.router-link-active {
  color: #f3ce00;
}
</style>
