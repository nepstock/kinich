<template>
  <div class="bg-light">
    <section class="vertical-h80 pt-4">
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
export default class Images extends Vue {}
</script>
