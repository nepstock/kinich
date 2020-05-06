<template>
  <div class="home">
    <section class="section-intro">
      <Search @search="searchValue" />
      <Carousel :arrCarousel="arrIntro" />
    </section>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel.vue";
import Search from "@/components/Search.vue";

@Component({
  components: {
    Carousel,
    Search
  }
})
export default class Home extends Vue {
  arrIntro: Array<object> = [
    {
      caption: "10 imágenes GRATIS",
      src: "https://picsum.photos/1024/480/?image=10",
      text:
        "Disfrute de 10 o 20 clips cada mes con los nuevos planes mensuales y anuales para satisfacer todas sus necesidades de video, lo que incluye toda la biblioteca de videos en HD y 4K."
    },
    {
      caption: "Obtenga un plan orientado a los resultados para su negocio",
      src: "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      text:
        "Disfrute de 10 o 20 clips cada mes con los nuevos planes mensuales y anuales para satisfacer todas sus necesidades de video, lo que incluye toda la biblioteca de videos en HD y 4K."
    },
    {
      caption: "Obtener videos por menos de USD 9 por clip",
      src: "https://www.blueskytravelaz.com/wp-content/uploads/revslider/homepage%201/slider-3-1024x480.jpg",
      text:
        "Disfrute de 10 o 20 clips cada mes con los nuevos planes mensuales y anuales para satisfacer todas sus necesidades de video, lo que incluye toda la biblioteca de videos en HD y 4K."
    }
  ];

  searchValue(value: string) {
    console.log("emit value", value);
  }
}
</script>
