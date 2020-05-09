<template>
  <b-overlay :show="showOverlay" opacity="0.65">
    <b-row>
      <b-col cols="6" sm="2" class="pb-3" v-for="item in arrImg" :key="item.id">
        <b-img
          class="img-click"
          @click="clickedImg(item)"
          thumbnail
          fluid
          :src="item.src"
          :alt="item.alt"
        ></b-img>
      </b-col>
    </b-row>
  </b-overlay>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ThumbnailList extends Vue {
  @Prop({ default: [] }) arrImg!: Array<object>;
  showOverlay = true;

  clickedImg(item: any) {
    alert('your clicked image ' + item.id)
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
