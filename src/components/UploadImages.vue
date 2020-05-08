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
        <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
        <div class="subtitle">
          ...or click to select a file from your computer
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
