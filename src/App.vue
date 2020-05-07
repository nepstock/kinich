<template>
  <div id="app">
    <b-overlay :show="showOverlay" opacity="0.65">
      <NavBar @logoutSuccess="logout" />
      <router-view></router-view>
    </b-overlay> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {
  showOverlay = false;
  logout(value: boolean) {
    this.showOverlay = true;
    setTimeout(() => {
      this.showOverlay = false;
    }, 2000)
  }
}
</script>
