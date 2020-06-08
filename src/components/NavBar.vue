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
          <div v-if="!isLogin">
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
              <i class="fas fa-user mr-2"></i> Iván Correa
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
                  ><i class="fas fa-user mr-2 text-muted"></i>Ir al
                  Mi cuenta</small
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
    >
      <FormSignUp />
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

  get typeNavbar() {
    return this.$route.path !== "/" ? true : false;
  }

  isLoginSuccess(value: boolean) {
    this.isLogin = true;
    this.showSignIn = false;
    this.popToast("info", "b-toaster-bottom-right");
    router.push({ name: "Profile" });
  }

  isLogout() {
    this.isLogin = false;
    this.$emit("logoutSuccess", true);
    setTimeout(() => {
      router.push({ name: "Home" });
    }, 1500);
  }

  popToast(variant: string, toaster: string) {
    // Use a shorter name for this.$createElement
    const h = this.$createElement;
    // Create the message
    const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
      h("b-spinner", { props: { type: "grow", small: true } }),
      h("strong", "Iván Correa "),
      "inició sesión correctamente!"
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
