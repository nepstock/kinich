<template>
  <div class="bg-light">
    <section class="vertical-h80 section-padding">
      <b-container class="text-left">
        <b-row class="justify-content-center">
          <b-col sm="2">
            <b-avatar variant="primary" text="IC" size="6rem"></b-avatar>
            <h1 class="h6 font-weight-bolder mt-3">Iván Correa</h1>
            <p class="small">
              Miembro desde<br />
              <small>20 de febrero del 2020</small>
            </p>
            <hr />
            <b-link class="ml-2 small font-weight-bolder">
              cancelar mi cuenta
            </b-link>
          </b-col>
          <b-col sm="6">
            <dl class="row">
              <dt class="col-sm-3">Nombre:</dt>
              <dd class="col-sm-9">
                <p>Pedro Iván Correa Benavente</p>
              </dd>

              <dt class="col-sm-3">Correo:</dt>
              <dd class="col-sm-9">
                <p>
                  ivan@mail.com.mx
                </p>
              </dd>
              <dt class="col-sm-3">Contraseña:</dt>
              <dd class="col-sm-9">
                <p>
                  **************
                  <b-link class="ml-2 small font-weight-bolder">cambiar</b-link>
                </p>
              </dd>

              <dt class="col-sm-3">Membresía</dt>
              <dd class="col-sm-9">
                <p>
                  <b-badge variant="warning">Profesional</b-badge>
                  <b-link class="ml-2 small font-weight-bolder"
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
                  <b-link class="ml-2 small font-weight-bolder"
                    >agregar otra tarjeta +</b-link
                  >
                </p>
              </dd>

              <dt class="col-sm-3">Facturación (RFC)</dt>
              <dd class="col-sm-9">
                <p>
                  ASD8730DF92
                  <b-link class="ml-2 small font-weight-bolder"
                    >cambiar de RFC</b-link
                  >
                </p>
              </dd>
            </dl>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyAccount extends Vue {}
</script>

<style scoped>
dt {
  font-weight: 600 !important;
}
</style>
