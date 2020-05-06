<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="item in arrCarousel"
        :key="item.caption"
        caption-tag="h1"
        :caption="item.caption"
        :text="item.text"
        :img-src="item.src"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {

  @Prop({default: () => []}) arrCarousel!: Array<object>;
}
</script>
