<template>
  <div class="bg-light">
    <section class="vertical-h80">
      <b-container>
        <b-row>
          <b-col>
            <Search />
          </b-col>
        </b-row>
        <b-row class="thumbnail-search">
          <b-col>
            <ThumbnailSearch :arrImg="arrImages" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue";
import ThumbnailSearch from "@/components/ThumbnailSearch.vue";

@Component({
  components: {
    Search,
    ThumbnailSearch
  }
})
export default class ImagesSearch extends Vue {
  arrImages = [
    {
      id: 1,
      src: "https://picsum.photos/1024/480/?image=10",
      alt: "image1"
    },
    {
      id: 2,
      src:
        "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      alt: "image2"
    },
    {
      id: 3,
      src:
        "https://www.blueskytravelaz.com/wp-content/uploads/revslider/homepage%201/slider-3-1024x480.jpg",
      alt: "image3"
    },
    {
      id: 4,
      src: "https://picsum.photos/1024/480/?image=10",
      alt: "image1"
    },
    {
      id: 5,
      src:
        "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      alt: "image2"
    },
    {
      id: 6,
      src:
        "https://www.blueskytravelaz.com/wp-content/uploads/revslider/homepage%201/slider-3-1024x480.jpg",
      alt: "image3"
    }
  ];
}
</script>

<style scoped>
.thumbnail-search {
  margin-top: 100px;
}
</style>
