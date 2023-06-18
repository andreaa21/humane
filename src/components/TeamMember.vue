<script>
import { store } from "../data/store";

export default {
  name: "member",
  data() {
    return {
      store,
    };
  },
  props: {
    isActive: Boolean,
    member: Object,
  },
};
</script>

<template>
  <section class="row" :class="{ active: isActive }">
    <div class="col-12 col-lg-6 image p-0 h-100">
      <img :src="member.image" :alt="member.lastname" class="" />
    </div>
    <div class="text col-12 col-lg-6 d-flex flex-column justify-content-center">
      <p class="w-50 name fw-bold fs-1">{{ member.name }} is Humane.</p>
      <p class="role w-50 fw-bold">
        {{ member.name }} {{ member.lastname }}, {{ member.role }}
      </p>
      <p class="w-50 mt-3 desc fw-bold d-none d-lg-block">{{ member.desc }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100%;
  width: 100%;
  transition: opacity 0.5s ease-in-out;
  overflow: hidden;
  .image img {
    max-width: 100%;
    max-height: 100%;
    min-height: 900px;
    object-fit: cover;
  }
}
@media screen and (width < 960px) {
  .text {
    position: absolute;
    bottom: 0;
    left: 25%;
  }
}
</style>
