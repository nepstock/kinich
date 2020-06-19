<template>
  <section class="bg-light">
    <b-container>
      <b-row>
        <b-col sm="12">
          <Search />
        </b-col>
      </b-row>
      <b-row class="mt-5 pt-5">
        <b-col sm="12">
          <p class="font-weight-bold text-center">
            Resultados para: <span class="text-danger">{{ result }}</span>
          </p>
          <p>
            <small class="font-weight-bold mr-2">Tags:</small>
            <b-badge
              class="px-3 mr-1 badge-search"
              pill
              variant="info"
              v-for="tag in tags"
              :key="tag"
              @click="searchValue(tag)"
              >{{ tag }}</b-badge
            >
          </p>
        </b-col>
        <b-col>
          <ThumbnailSearch :arrImg="items" />
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
export default class SearchView extends Vue {
  currentPage = 1;
  tags = ["futbol", "equipo", "balón", "América", "Estadio", "Uniforme"];

  get result() {
    return this.$route.query.q;
  }

  items = [
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

  searchValue(value: string) {
    this.$router.push({ name: "Search", query: { q: value } });
  }
}
</script>

<style scoped>
.badge-search {
  font-weight: 400;
  line-height: 0.99;
  cursor: pointer;
}
</style>
