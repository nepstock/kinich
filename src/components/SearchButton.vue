<template>
  <div>
    <b-input-group class="mb-4">
      <b-form-input
        size="sm"
        type="search"
        placeholder="Buscar en mis imágenes"
      ></b-form-input>
      <b-input-group-append>
        <b-button size="sm" variant="danger"
          >Buscar <i class="fas fa-search ml-2"></i
        ></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchButton extends Vue {}
</script>
