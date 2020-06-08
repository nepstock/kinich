<template>
  <div class="bg-light">
    <b-card>
      <h5 class="font-weight-bolder">Subir imágenes</h5>
      <hr />
      <b-alert show variant="warning">
        <small>
          <span class="font-weight-bolder">Recuerda:</span>
          cada vez que subas una imagen deberás editarla para agregar su
          <span class="font-weight-bolder">nombre</span>,
          <span class="font-weight-bolder">descripción</span> y
          <span class="font-weight-bolder">tags</span>,<br />
          para que pueda aparecer en la búsqueda de imágenes
        </small>
      </b-alert>
      <upload-images />
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UploadImages from "@/components/UploadImages.vue";

@Component({
  components: {
    UploadImages
  }
})
export default class Images extends Vue {}
</script>
