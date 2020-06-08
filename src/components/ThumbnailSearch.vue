<template>
  <b-overlay :show="showOverlay" opacity="0.65">
    <b-row>
      <b-col cols="6" sm="3" class="pb-3" v-for="item in arrImg" :key="item.id">
        <b-img
          class="img-click"
          @click="clickedImg(item)"
          thumbnail
          fluid
          :src="item.src"
          :alt="item.alt"
        ></b-img>
        <div class="w-100 p-3 bg-light">
          <p class="small">fecha de descarga: <span class="font-weight-bold">12/05/2020</span></p>
        </div>
      </b-col>
    </b-row>
  </b-overlay>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from "@/router/index";

@Component
export default class ThumbnailSearch extends Vue {
  @Prop({ default: [] }) arrImg!: Array<object>;
  showOverlay = true;

  clickedImg(item: any) {
    router.push({ name: "ImagesDownload", params: { id: item.id} });
  }

  created() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000);
  }
}
</script>

<style scoped>
.img-click {
  cursor: pointer;
  transition: all ease 0.25s
}
.img-click:hover {
  -ms-transform: scale(1.075,1.075); /* IE 9 */
  transform: scale(1.075,1.075);
}
</style>
