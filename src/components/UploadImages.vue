<template>
  <div>
    <vue2Dropzone
      id="drop-zone"
      :options="dropzoneOptions"
      :duplicateCheck="true"
      :useCustomSlot="true"
      @vdropzone-success="testFile"
    >
      <div class="dropzone-custom-content">
        <div class="dropzone-custom-title font-weight-bolder ">
          <h1 class="h3">
            <i class="fas fa-cloud-upload-alt fa-3x text-muted"></i>
          </h1>
          Arrastra tus imágenes aquí para cargarlas
        </div>
        <div class="subtitle font-weight-bolder ">
          ...o da clic y selecciona el archivo desde tu computadora
        </div>
      </div>
    </vue2Dropzone>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

@Component({
  components: {
    vue2Dropzone
  }
})
export default class UploadImages extends Vue {
  dropzoneOptions = {
    url: "https://httpbin.org/post",
    thumbnailWidth: 200,
    addRemoveLinks: true,
    maxFilesize: 0.5,
    acceptedFiles: ".jpg,.png",
    headers: { "My-Awesome-Header": "header value" }
  };

  testFile(file: any, response: any) {
    console.log(file);
    this.makeToast("success", "Se cargó correctamente tu imágen");
  }

  makeToast(variant: string, response: string) {
    this.$bvToast.toast(response, {
      title: `Image ${variant || "default"}`,
      variant: variant,
      solid: true
    });
  }
}
</script>

<style scoped>
.vue-dropzone {
  border: 3px dashed #e5e5e5;
  font-family: "Spartan", sans-serif;
}
</style>
