<template>
  <b-overlay :show="showOverlay" opacity="0.65">
    <div class="bg-light">
      <LightBox
        ref="lightbox"
        :media="media"
        :showLightBox="false"
        :showThumbs="false"
      ></LightBox>
      <section class="vertical-h80">
        <b-container class="text-left">
          <b-card>
            <b-row class="justify-content-center">
              <b-col cols="12" sm="6">
                <img
                  src="http://mundoenpositivo.com/wp-content/uploads/2019/07/paisaje.jpg"
                  alt="test"
                />
                <b-row class="justify-content-end">
                  <b-col class="text-right">
                    <b-button @click="showImage" size="sm" variant="light"
                      >Vista previa <i class="fas fa-search-plus ml-2"></i
                    ></b-button>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="6">
                <FormImagesDownload />
              </b-col>
            </b-row>
          </b-card>
        </b-container>
      </section>
    </div>
  </b-overlay>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormImagesDownload from "@/components/FormImagesDownload.vue";
import LightBox from "vue-image-lightbox";

@Component({
  components: {
    FormImagesDownload,
    LightBox
  }
})
export default class ImagesEdit extends Vue {
  showOverlay = true;

  media = [
    {
      // For image
      thumb:
        "http://mundoenpositivo.com/wp-content/uploads/2019/07/paisaje.jpg",
      src: "http://mundoenpositivo.com/wp-content/uploads/2019/07/paisaje.jpg",
      caption: "caption to display. receive <html> <b>tag</b>"
    }
  ];

  showImage() {
    console.log("clic");
    this.$refs.lightbox.showImage(0);
  }

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
