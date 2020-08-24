<template>
  <div>
    <b-row>
      <b-col v-if="typeUser === 'user'" class="text-left p-4">
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
        <b-form class="text-left" @submit.prevent.stop="onSubmit" novalidate>
          <h4>Registrarse <span v-if="typeUser === 'partner'">como contribuidor</span></h4>
          <b-form-group
            v-if="typeUser === 'partner'"
            id="input-group-7"
            label-size="sm"
            label="Ingresa tu nombre completo"
            label-for="input-2"
          >
            <b-form-input
              id="input-7"
              v-model.trim="$v.name.$model"
              :state="$v.name.$dirty ? !$v.name.$error : 'null'"
              type="text"
              placeholder=""
            ></b-form-input>
            <b-form-invalid-feedback>
              Ingresa una correo electronico válido
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            v-if="typeUser === 'partner'"
            id="input-group-8"
            label-size="sm"
            label="Elija el nombre que desea mostrar a los clientes."
            label-for="input-2"
          >
            <b-form-input
              id="input-8"
              v-model.trim="$v.userName.$model"
              :state="$v.userName.$dirty ? !$v.userName.$error : 'null'"
              type="text"
              placeholder=""
            ></b-form-input>
            <b-form-invalid-feedback>
              Ingresa una correo electronico válido
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label-size="sm"
            label="Ingresa un correo electrónico"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model.trim="$v.email.$model"
              :state="$v.email.$dirty ? !$v.email.$error : 'null'"
              type="email"
              placeholder=""
            ></b-form-input>
            <b-form-invalid-feedback>
              Ingresa una correo electronico válido
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label-size="sm"
            label="Ingresa tu nueva contraseña"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="$v.password.$model"
              :state="$v.password.$dirty ? !$v.password.$error : 'null'"
              type="password"
              placeholder=""
            ></b-form-input>
            <b-form-invalid-feedback>
              Ingresa una contraseña que contenga al menos una letra mayúscula,
              letra minúscula, número y signo (!¡?¿.,-_#$%&/()[]{};:@+*)
            </b-form-invalid-feedback>
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
          <b-form-group class="mb-0 mt-3">
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
import API, { login } from "@/api/services";
import { Validations } from "vuelidate-property-decorators";
import { required } from "vuelidate/lib/validators";
import { email, password } from "@/utils/validations";

@Component
export default class FormSignUp extends Vue {
  email = "";
  password = "";
  name = "";
  userName = "";
  loading = false;

  @Validations()
  validations = {
    name: { name },
    userName: { name },
    email: { required, email },
    password: { required, password }
  };

  get typeUser() {
    return this.$route.path === "/" ? "user" : "partner";
  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    this.loading = true;
    this.$v.$touch();
    if (!this.$v.$invalid) {
      API.post("/users", { name: this.name, userName: this.name, email: this.email, password: this.password })
        .then(resp => {
          console.log("response", resp.data);
          const body = {
            'username': this.email,
            'password': this.password,
            'client_id': process.env.VUE_APP_CLIENT_ID
          };

          login(body);
          setTimeout(() => {
            if (this.$store.state.username !== "") {
              this.$emit("success", false);
            }
          }, 500);
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    } else {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
</script>
