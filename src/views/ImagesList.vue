<template>
  <div class="bg-light">
    <section class="vertical-h80 pt-5">
      <b-container>
        <b-row v-if="arrImages.length === 0">
          <b-col>
            <h2>
              <i class="fas fa-inbox fa-3x text-muted"></i>
            </h2>
            <h3 class="text-muted h6 font-weight-bolder">Actualmente no tienes imágenes cargadas.</h3>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="12">
            <b-row class="justify-content-end">
              <b-col sm="6">
                <SearchButton />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12">
            <ThumbnailList :arrImg="arrImages" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ThumbnailList from "@/components/ThumbnailList.vue";
import SearchButton from "@/components/SearchButton.vue";

@Component({
  components: {
    SearchButton,
    ThumbnailList
  }
})
export default class ImagesList extends Vue {

  // arrImages = []

  arrImages = [
    {
      id: 1,
      src: "https://picsum.photos/250/250/?image=58",
      alt: "image1"
    },
    {
      id: 2,
      src: "https://picsum.photos/250/250/?image=57",
      alt: "image2"
    },
    {
      id: 3,
      src: "https://picsum.photos/250/250/?image=59",
      alt: "image3"
    },
    {
      id: 4,
      src: "https://picsum.photos/250/250/?image=58",
      alt: "image4"
    },
    {
      id: 5,
      src: "https://picsum.photos/250/250/?image=57",
      alt: "image5"
    },
    {
      id: 6,
      src: "https://picsum.photos/250/250/?image=59",
      alt: "image6"
    },
    {
      id: 7,
      src: "https://picsum.photos/250/250/?image=58",
      alt: "image1"
    },
    {
      id: 8,
      src: "https://picsum.photos/250/250/?image=57",
      alt: "image2"
    },
    {
      id: 9,
      src: "https://picsum.photos/250/250/?image=59",
      alt: "image3"
    },
    {
      id: 10,
      src: "https://picsum.photos/250/250/?image=58",
      alt: "image4"
    },
    {
      id: 11,
      src: "https://picsum.photos/250/250/?image=57",
      alt: "image5"
    },
    {
      id: 12,
      src: "https://picsum.photos/250/250/?image=59",
      alt: "image6"
    }
  ]
}
</script>
