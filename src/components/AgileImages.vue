<template>
  <agile
    :nav-buttons="false"
    :autoplay-speed="5000"
    :speed="2500"
    :dots="false"
    fade
    :pause-on-hover="false"
    autoplay
  >
    <div v-for="image in items" :key="image.name" class="slide">
      <div class="box-info">
        <h4>{{ image.description }}</h4>
      </div>
      <img
        :src="image.image"
        :alt="image.name"
      />
    </div>
  </agile>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AgileImages extends Vue {
  @Prop({ default: () => [] }) items!: Array<object>;
}
</script>
<style lang="scss" scoped>
.slide {
  position: relative;
  display: block;
  height: 90vh;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  .box-info{
    max-width: 350px;
    position: absolute;
    border-radius: 10px;
    top: 1rem;
    right: 1rem;
    padding: 1rem;
    background-color: rgba(0,0,0,0.4);
    h4{
      color: #fff;
    }
  }
}

@media(min-width: 768px) {
  .slide{
    .box-info{
      top: 3rem;
      right: 3rem;
    }
  }
}
</style>
