<template>
  <div class="px-3 py-4">
    <b-form class="text-left" @submit="onSubmit">
      <h3>Iniciar sesión</h3>
      <b-form-group
        id="input-group-2"
        label-size="sm"
        label="Ingresa tu nombre de usuario o correo electrónico"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.user"
          placeholder=""
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label-size="sm"
        label="Contraseña"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          placeholder=""
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mb-0 mt-5">
        <b-button type="submit" variant="primary" block pill :disabled="loading">
          <span v-if="!loading">Ingresar</span>
          <span v-else>
            Ingresando... 
            <b-spinner variant="light" label="Spinning" small></b-spinner>
          </span>
        </b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormSignIn extends Vue {
  form = {
    user: "",
    password: ""
  };
  loading = false;

  onSubmit(evt: Event) {
    evt.preventDefault();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.$emit('success', true);
    }, 2500)
    // alert(JSON.stringify(this.form));
  }
}
</script>
