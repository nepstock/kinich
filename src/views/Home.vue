<template>
  <div class="home">
    <section class="section-intro relative">
      <Search @search="searchValue" />
      <Carousel :arrCarousel="arrIntro" />
    </section>
    <section class="vertical-h80 d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col sm="12">
            <h2 class="font-weight-bold mb-5">Temas</h2>
          </b-col>
          <b-col>
            <CardHover :items="themes" />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-padding bg-light">
      <b-container>
        <b-row>
          <b-col sm="12">
            <h2 class="font-weight-bold mb-5">Nuestro planes</h2>
          </b-col>
        </b-row>
        <PricingCards />
      </b-container>
    </section>
    <section>
      <AgileImages :items="agileImages" />
    </section>
    <section class="section-padding">
      <b-container>
        <b-row class="justify-content-center text-center">
          <b-col sm="8">
            <h4>
              Registrate con nostros y comienza tu prueba gratuita de 10
              imágenes totalmente gratis
            </h4>
            <b-button
              variant="primary"
              size="md"
              class="my-3 px-4"
              pill
              v-b-modal.sign-up
              >Registrarse</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel.vue";
import Search from "@/components/Search.vue";
import CardHover from "@/components/CardHover.vue";
import AgileImages from "@/components/AgileImages.vue";
import PricingCards from "@/components/PricingCards.vue";

@Component({
  components: {
    Carousel,
    Search,
    CardHover,
    PricingCards,
    AgileImages
  }
})
export default class Home extends Vue {
  arrIntro: Array<object> = [
    {
      caption: "Obtenga un plan orientado a los resultados para su negocio",
      src:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Disfrute de 10 o 20 clips cada mes con los nuevos planes mensuales y anuales para satisfacer todas sus necesidades de video, lo que incluye toda la biblioteca de videos en HD y 4K."
    },
    {
      caption: "10 imágenes GRATIS",
      src:
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Disfrute de 10 o 20 clips cada mes con los nuevos planes mensuales y anuales para satisfacer todas sus necesidades de video, lo que incluye toda la biblioteca de videos en HD y 4K."
    },
    {
      caption: "Obtener videos por menos de USD 9 por clip",
      src:
        "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      text:
        "Disfrute de 10 o 20 clips cada mes con los nuevos planes mensuales y anuales para satisfacer todas sus necesidades de video, lo que incluye toda la biblioteca de videos en HD y 4K."
    }
  ];

  themes: Array<object> = [
    {
      title: "Paisajes",
      bg: "https://picsum.photos/1024/480/?image=10",
      description: "Las mejores imágenes de paisajes"
    },
    {
      title: "Ciudades",
      bg:
        "https://static1lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/fotos/mexico_ciudaddemexico_paseoreforma_angelindependencia_shutterstockrf_1066463744_aberu.go_shutterstock.jpg?itok=MjJFsqoK",
      description: "Las mejores imágenes de ciudades del mundo"
    },
    {
      title: "Gastronomía",
      bg:
        "https://foodandtravel.mx/wp-content/uploads/2018/12/probemosmexicoportada.jpg",
      description: "Las mejores imágenes de países"
    }
  ];

  agileImages: Array<object> = [
    {
      name: "image",
      description:
        "Encontrar ese color perfecto con nuestro selector de color y descubrir bellas armonías de color, tintes, matices y tonos",
      image:
        "https://images.unsplash.com/photo-1509549649946-f1b6276d4f35?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      name: "image2",
      description:
        "Encontrar ese color perfecto con nuestro selector de color y descubrir bellas armonías de color, tintes, matices y tonos",
      image:
        "https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    },
    {
      name: "image3",
      description:
        "Encontrar ese color perfecto con nuestro selector de color y descubrir bellas armonías de color, tintes, matices y tonos",
      image:
        "https://images.unsplash.com/photo-1511231683436-44735d14c11c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    }
  ];

  searchValue(value: string) {
    console.log("emit value", value);
  }
}
</script>
