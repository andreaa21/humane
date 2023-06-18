<script>
import Navbar from "../components/Navbar.vue";
import PolicyLinks from "../components/PolicyLinks.vue";
import TeamMember from "../components/TeamMember.vue";
import { store } from "../data/store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export default {
  name: "Team",
  components: {
    Navbar,
    PolicyLinks,
    TeamMember,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      activeSection: 0,
      sections: [],
      store,
    };
  },
  methods: {},
  setup() {
    return {
      modules: [Pagination, Mousewheel],
    };
  },
  mounted() {},
};
</script>

<template>
  <div class="wrapper d-flex flex-column-reverse flex-lg-column">
    <div class="custom-container position position-relative">
      <PolicyLinks class="d-none d-lg-block" />

      <swiper
        :direction="'vertical'"
        :slidesPerView="1"
        :spaceBetween="30"
        :mousewheel="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
        style="--swiper-pagination-bullet-inactive-color: white"
      >
        <swiper-slide v-for="(member, index) in store.teamMembers" :key="index"
          ><TeamMember :member="member"
        /></swiper-slide>
      </swiper>
    </div>

    <Navbar />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: black;
  height: 100vh;
  color: white;
  .custom-container {
    height: calc(100% - 56px);
    overflow-y: hidden;
    transition: all 2s ease;
    scrollbar-width: none;
  }
}

.controls {
  right: 20px;
  top: 50%;
  span {
    cursor: pointer;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
