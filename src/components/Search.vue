<template>
  <div class="search px-3 px-md-5" :class="spacingBar ? 'active' : ''">
    <b-input-group>
      <b-input-group-prepend>
        <b-dropdown :disabled="true" size="sm" :text="textDropdown" variant="info">
          <b-dropdown-item @click="clickOption('Todas las imágenes')" size="sm">
            <small><i class="far fa-images mr-2"></i>Todas las imágenes</small>
          </b-dropdown-item>
          <b-dropdown-item @click="clickOption('Fotos')" size="sm">
            <small><i class="far fa-images mr-2"></i>Fotos</small>
          </b-dropdown-item>
          <b-dropdown-item @click="clickOption('Vectores')" size="sm">
            <small><i class="fas fa-vector-square mr-2"></i>Vectores</small>
          </b-dropdown-item>
          <b-dropdown-item @click="clickOption('Videos')" size="sm">
            <small><i class="fas fa-photo-video mr-2"></i>Videos</small>
          </b-dropdown-item>
        </b-dropdown>
      </b-input-group-prepend>

      <b-form-input type="search" placeholder="Buscar imágenes"></b-form-input>

      <b-input-group-append>
        <b-button size="sm" variant="danger"
          >Buscar <i class="fas fa-search ml-2"></i
        ></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<style lang="css" scoped>
.search {
  width: 70%;
  margin-left: 15%;
  position: absolute;
  top: 30%;
  z-index: 2;
}

.search.active {
  top: 30px;
}

.form-control:focus,
.form-control:active {
  outline: none;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #d0d0d0;
  font-weight: 600;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #d0d0d0;
  font-weight: 600;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #d0d0d0;
  font-weight: 600;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  textDropdown = "Todas las imágenes";

  get spacingBar() {
    return this.$route.path !== "/" ? true : false;
  }

  clickOption(value: string) {
    this.textDropdown = value;
    this.$emit("search", value);
  }
}
</script>
