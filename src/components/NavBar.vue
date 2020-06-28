<template>
  <div>
    <b-navbar
      class="navbar-custom bg-transparent'"
      :class="typeNavbar ? '' : 'absolute'"
      :type="typeNavbar ? 'light' : 'dark'"
    >
      <b-navbar-brand to="/">NepeStock</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <div v-if="username === ''">
            <b-button
              variant="outline-light"
              size="sm"
              class="my-2 my-sm-0 mr-2"
              pill
              v-b-modal.login
              >Iniciar sesión</b-button
            >
            <b-button
              variant="primary"
              size="sm"
              class="my-2 my-sm-0"
              pill
              v-b-modal.sign-up
              >Registrarse</b-button
            >
          </div>
          <b-dropdown
            v-else
            id="dropdown-offset"
            :right="true"
            size="sm"
            variant="link"
          >
            <template v-slot:button-content>
              <i class="fas fa-user mr-2"></i> {{ username }}
            </template>
            <b-dropdown-item size="sm">
              <router-link to="/">
                <small class="text-body"
                  ><i class="fas fa-home mr-2 text-muted"></i>Ir al
                  inicio</small
                >
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item size="sm">
              <router-link :to="{ name: 'Profile' }">
                <small class="text-body"
                  ><i class="fas fa-user mr-2 text-muted"></i>Ir al Mi
                  cuenta</small
                >
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="isLogout" size="sm">
              <small
                ><i class="fas fa-power-off mr-2 text-muted"></i>Cerrar
                sesión</small
              >
            </b-dropdown-item>
          </b-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <b-modal
      id="login"
      :hide-header="true"
      :hide-footer="true"
      :centered="true"
      v-model="showSignIn"
    >
      <FormSignIn @success="isLoginSuccess" />
    </b-modal>

    <b-modal
      id="sign-up"
      :hide-header="true"
      :hide-footer="true"
      :centered="true"
      size="lg"
      v-model="showSignUp"
    >
      <FormSignUp @success="isRegisterSuccess" />
    </b-modal>
  </div>
</template>
<style scoped>
.navbar-custom {
  position: relative;
  width: 100%;
}
.navbar-custom.absolute {
  position: absolute;
  top: 0;
  z-index: 3;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormSignIn from "@/components/FormSignIn.vue";
import FormSignUp from "@/components/FormSignUp.vue";
import NavRoutes from "@/components/NavRoutes.vue";
import router from "@/router/index";
import { logout } from "@/api/services";

@Component({
  components: {
    FormSignIn,
    FormSignUp,
    NavRoutes
  }
})
export default class NavBar extends Vue {
  isLogin = false;
  showSignIn = false;
  showSignUp = false

  get typeNavbar() {
    return this.$route.path !== "/" ? true : false;
  }

  get username() {
    return this.$store.state.username;
  }

  isLoginSuccess(value: boolean) {
    this.isLogin = !value;
    this.showSignIn = value;
    this.popToast("info", "b-toaster-bottom-right");
  }

  isRegisterSuccess(value: boolean) {
    console.log('register', value);
    this.showSignUp = value;
    this.popToast("info", "b-toaster-bottom-right");
  }

  isLogout() {
    this.$emit("logoutSuccess", true);
    logout();
  }

  popToast(variant: string, toaster: string) {
    // Use a shorter name for this.$createElement
    const h = this.$createElement;
    // Create the message
    const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
      h("b-spinner", { props: { type: "grow", small: true } }),
      h("strong", this.username),
      " inició sesión correctamente"
    ]);
    // Create the title
    const vNodesTitle = h(
      "div",
      { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
      [
        h("strong", { class: "mr-2" }, "Login Success"),
        h("small", { class: "ml-auto text-italics" }, "5 minutes ago")
      ]
    );
    // Pass the VNodes as an array for message and title
    this.$bvToast.toast([vNodesMsg], {
      title: [vNodesTitle],
      solid: true,
      variant: variant,
      toaster: toaster
    });
  }
}
</script>
