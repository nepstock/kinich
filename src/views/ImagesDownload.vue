<template>
  <b-overlay :show="showOverlay" opacity="0.65">
    <div class="bg-light">
      <section class="vertical-h80 py-5">
        <b-container class="text-left">
          <b-row class="justify-content-center">
            <b-col cols="12" sm="6">
              <img
                src="http://mundoenpositivo.com/wp-content/uploads/2019/07/paisaje.jpg"
                alt="test"
              />
            </b-col>
            <b-col sm="4">
              <FormImagesDownload />
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </b-overlay>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormImagesDownload from "@/components/FormImagesDownload.vue";

@Component({
  components: {
    FormImagesDownload
  }
})
export default class ImagesEdit extends Vue {
  showOverlay = true;

  makeToast(variant: string, response: string) {
    this.$bvToast.toast(response, {
      title: `Image ${variant || "default"}`,
      variant: variant,
      solid: true
    });
  }

  created() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1500);
  }
}
</script>