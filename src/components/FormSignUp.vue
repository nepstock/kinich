<template>
  <div>
    <b-row>
      <b-col class="text-left p-4">
        <div class="border-right">
          <h5>Acceda a características exclusivas con una cuenta gratuita</h5>
          <b-nav vertical small>
            <b-nav-item disabled
              >Guarde y ordene sus elementos favoritos con
              colecciones</b-nav-item
            >
            <b-nav-item disabled
              >Comparta colecciones con quien quiera, desde cualquier
              lugar</b-nav-item
            >
            <b-nav-item disabled
              >Haga una prueba antes de la compra con muestras
              descargables</b-nav-item
            >
            <b-nav-item disabled>
              Controle fácilmente su historial de descargas y
              exploración</b-nav-item
            >
            <b-nav-item disabled> Y mucho más...</b-nav-item>
          </b-nav>
        </div>
      </b-col>
      <b-col class="px-4 py-4">
        <b-form class="text-left" @submit="onSubmit">
          <h3>Registrarse</h3>
          <b-form-group
            id="input-group-2"
            label-size="sm"
            label="Ingresa un correo electrónico"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              placeholder=""
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label-size="sm"
            label="Ingresa tu nueva contraseña"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.password"
              type="password"
              placeholder=""
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <p class="small">
              Al crear una cuenta, acepto los
              <b-link href="#foo">Términos del sitio web</b-link>, la
              <b-link href="#foo">Política de privacidad</b-link> y los
              <b-link>Términos de otorgamiento de licencias</b-link>
              de Shutterstock.
            </p>
          </b-form-group>
          <b-form-group class="mb-0 mt-5">
            <b-button
              type="submit"
              variant="primary"
              block
              pill
              :disabled="loading"
            >
              <span v-if="!loading">Registrar</span>
              <span v-else>
                Registrando...
                <b-spinner variant="light" label="Spinning" small></b-spinner>
              </span>
            </b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormSignUp extends Vue {
  form = {
    email: "",
    password: ""
  };
  loading = false;

  onSubmit(evt: Event) {
    evt.preventDefault();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500)
    // alert(JSON.stringify(this.form));
  }
}
</script>
