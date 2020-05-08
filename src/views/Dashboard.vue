<template>
  <div>
    <section class="section-padding-t bg-light">
      <b-container>
        <b-row>
          <b-col>
            <h1 class="h3">Carga de imágenes</h1>
            <p>
              Bienvenido al módulo para cargar tus imágenes a
              <span class="text-primary">NepeStock</span>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-padding">
      <b-container>
        <b-row>
          <b-col>
            <upload-images />
          </b-col>
        </b-row>
      </b-container>
    </section>
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
export default class Dashboard extends Vue {}
</script>
