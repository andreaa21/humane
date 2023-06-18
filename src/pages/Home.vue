<script>
import Navbar from "../components/Navbar.vue";
import PolicyLinks from "../components/PolicyLinks.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    PolicyLinks,
  },
};
</script>

<template>
  <div class="wrapper d-flex flex-column-reverse flex-lg-column">
    <div
      class="video-container d-flex justify-content-center align-items-center position-relative"
    >
      <video
        autoplay
        muted
        loop
        src="/import_6114c57031d9d6.79502202.mp4"
        class="video-bg position-absolute z-0"
      ></video>
      <PolicyLinks class="d-none d-lg-block" />
      <div
        class="content text-center d-flex flex-column z-1 align-items-center"
      >
        <h1 class="mb-5">Good Ai is Humane.</h1>
        <a class="mb-5 fs-4 fw-bold" href="#"
          >10 Principles for Designing Good Ai &rarr;</a
        >
        <button class="btn btn-light w-50">Join the Waitlist</button>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  .video-container {
    height: calc(100% - 56px);
  }
  .video-bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  .content {
    color: white;
    h1 {
      font-size: 3rem;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      transition: opacity 0.15s;
      &:hover {
        opacity: 60%;
      }
    }
    button {
      border-radius: 40px;
      font-size: 1.2rem;
      transition: opacity 0.15s;
      &:hover {
        opacity: 60%;
      }
    }
  }
}
</style>
