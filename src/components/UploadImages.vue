<template>
  <div>
    <vue2Dropzone
      id="drop-zone"
      :options="dropzoneOptions"
      :duplicateCheck="true"
      :useCustomSlot="true"
      @vdropzone-file-added="successFile"
      @vdropzone-removed-file="removeFile"
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
    <b-row v-if="arrFiles.length > 0" class="justify-content-center">
      <b-col class="mt-4">
        <router-link to="/images-list">
          <b-button class="px-4" variant="primary" size="sm"
            >Editar imagenes <i class="fas fa-pencil-alt ml-2"></i
          ></b-button>
        </router-link>
      </b-col>
    </b-row>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import router from "@/router/index";

@Component({
  components: {
    vue2Dropzone
  }
})
export default class UploadImages extends Vue {
  arrFiles: Array<object> = [];

  dropzoneOptions = {
    url: "https://httpbin.org/post",
    previewTemplate:
      '<div id="preview-t" class="dz-preview dz-file-preview">\
        <div class="dz-image"><img data-dz-thumbnail /></div>\
        <div class="dz-details text-center">\
          <div class="dz-filename"><span data-dz-name></span></div>\
          <div class="dz-size" data-dz-size></div>\
        </div>\
        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\
        <div class="dz-success-mark"><i class="far fa-file-image fa-2x text-white"></i></div>\
        <div class="dz-error-mark"><i class="fas fa-times text-white"></i></div>\
        <div class="dz-error-message"><span data-dz-errormessage></span></div>\
      </div>',
    uploadMultiple: true,
    thumbnailWidth: 200,
    addRemoveLinks: true,
    dictRemoveFile: "Eliminar imagen",
    maxFilesize: 0.5,
    acceptedFiles: ".jpg,.png",
    headers: { "My-Awesome-Header": "header value" }
  };

  successFile(file: any, response: any) {
    this.arrFiles.push(file);
    console.log("array", this.arrFiles);
    this.makeToast("success", "Se cargó correctamente tu imagen");
  }

  removeFile(file: any, error: any, xhr: any) {
    console.log("eliminado", file);
    this.makeToast("danger", "Se eliminó correctamente tu imagen");
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

.dropzone.dz-clickable * {
  cursor: pointer !important;
}
</style>
