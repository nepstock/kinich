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
              <FormImagesEdit @add="successAdd" />
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </b-overlay>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormImagesEdit from "@/components/FormImagesEdit.vue";

@Component({
  components: {
    FormImagesEdit
  }
})
export default class ImagesEdit extends Vue {
  showOverlay = true;

  successAdd(image: object) {
    this.showOverlay = true
    setTimeout(() => {
      this.showOverlay = false;
      this.makeToast('success', '¡Se guardó correctamente la imagen!')
    }, 1500);
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
