<template>
  <b-row>
    <b-col sm="8">
      <b-card class="small">
        <dl class="row">
          <b-col sm="12">
            <h5 class="font-weight-bolder">Mi perfil</h5>
            <hr />
          </b-col>
          <dt class="col-sm-3">Nombre:</dt>
          <dd class="col-sm-9">
            <p>{{ username }}</p>
          </dd>

          <dt class="col-sm-3">Correo:</dt>
          <dd class="col-sm-9">
            <p>
              {{ email }}
            </p>
          </dd>
          <dt class="col-sm-3">Contraseña:</dt>
          <dd class="col-sm-9">
            <p>
              **************
              <b-link class="ml-2 font-weight-bolder">cambiar</b-link>
            </p>
          </dd>

          <dt class="col-sm-3">Suscripción</dt>
          <dd class="col-sm-9">
            <p>
              <b-badge variant="warning" class="px-2 py-1">Mensual</b-badge>
              <b-link class="ml-2 font-weight-bolder"
                >cambiar de plan</b-link
              >
            </p>
          </dd>

          <dt class="col-sm-3">
            Método de pago
          </dt>
          <dd class="col-sm-9">
            <p>
              **** **** **** 0232
              <i class="fab fa-cc-visa ml-2"></i>
              <b-link class="ml-2 font-weight-bolder"
                >agregar otra tarjeta +</b-link
              >
            </p>
          </dd>

          <dt class="col-sm-3">Facturación (RFC)</dt>
          <dd class="col-sm-9">
            <p class="mb-0">
              ASD8730DF92
              <b-link class="ml-2 font-weight-bolder"
                >cambiar de RFC</b-link
              >
            </p>
          </dd>
        </dl>
      </b-card>
    </b-col>
    <b-col sm="4" class="px-3">
      <b-avatar variant="primary" text="IC" size="6rem"></b-avatar>
      <h1 class="h6 font-weight-bolder mt-3">{{ username }}</h1>
      <p class="small">
        Miembro desde<br />
        <small>20 de febrero del 2020</small>
      </p>
      <hr />
      <b-link class="ml-2 small font-weight-bolder">
        cancelar mi cuenta
      </b-link>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Profile extends Vue {
  get username() {
    return this.$store.state.username;
  }

  get email() {
    return this.$store.state.email;
  }
}
</script>

<style scoped>
dt {
  font-weight: 600 !important;
}
</style>
