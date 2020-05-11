<template>
  <div class="bg-light">
    <section class="vertical-h80 pb-5">
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
        <b-row class="justify-content-end">
          <b-col sm="4">
            <b-pagination
              v-model="currentPage"
              :total-rows="100"
              :per-page="1"
              align="fill"
              size="sm"
              first-number
              last-number
            ></b-pagination>
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
  currentPage = 3;

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
    },
    {
      id: 7,
      src: "https://picsum.photos/1024/480/?image=10",
      alt: "image1"
    },
    {
      id: 8,
      src:
        "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      alt: "image2"
    },
    {
      id: 9,
      src:
        "https://www.blueskytravelaz.com/wp-content/uploads/revslider/homepage%201/slider-3-1024x480.jpg",
      alt: "image3"
    },
    {
      id: 10,
      src: "https://picsum.photos/1024/480/?image=10",
      alt: "image1"
    },
    {
      id: 11,
      src:
        "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      alt: "image2"
    },
    {
      id: 12,
      src:
        "https://www.blueskytravelaz.com/wp-content/uploads/revslider/homepage%201/slider-3-1024x480.jpg",
      alt: "image3"
    },
    {
      id: 13,
      src: "https://picsum.photos/1024/480/?image=10",
      alt: "image1"
    },
    {
      id: 14,
      src:
        "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      alt: "image2"
    },
    {
      id: 15,
      src:
        "https://www.blueskytravelaz.com/wp-content/uploads/revslider/homepage%201/slider-3-1024x480.jpg",
      alt: "image3"
    },
    {
      id: 16,
      src: "https://picsum.photos/1024/480/?image=10",
      alt: "image1"
    },
    {
      id: 17,
      src:
        "https://adventuretours.com.mx/wp-content/uploads/2018/03/m-7-1024x480.jpg",
      alt: "image2"
    },
    {
      id: 18,
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
