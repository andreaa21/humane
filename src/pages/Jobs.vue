<script>
import Navbar from "../components/Navbar.vue";
import PolicyLinks from "../components/PolicyLinks.vue";

export default {
  name: "Jobs",
  components: {
    Navbar,
    PolicyLinks,
  },
  methods: {},
};
</script>

<template>
  <div class="wrapper d-flex flex-column-reverse flex-lg-column">
    <div class="custom-container">
      <PolicyLinks class="d-none d-lg-block" />
      <section
        class="row d-flex justify-content-center align-items-center align-content-center"
      >
        <div class="col-12 text-center animation mb-5">
          <h1>At Humane We Value...</h1>
        </div>
        <div class="left text-center col-12 col-lg-3 mb-5">
          <p>trust</p>
          <p>truth</p>
          <p>+joy.</p>
        </div>
        <div class="right col-12 col-lg-6 ms-lg-5 px-5">
          <p>
            We’re built on the foundation of our values of trust, truth, and
            joy, and we are now growing our team through the same belief system.
          </p>
          <p>We would love to hear from you.</p>
          <p>— The Humane Team</p>
        </div>
      </section>
      <section class="row d-flex flex-column">
        <div class="col-12 mb-5 px-5">
          <h1>We Believe</h1>
          <p>
            The best work is done in environments built on trust, where we can
            all feel safe, supported, and prioritized.
          </p>
          <p>
            The best products are brought to life by honest and diverse teams
            working together to build for the human experience.
          </p>
          <p>
            In technology that reconnects you with the world around you and the
            joy within yourself.
          </p>
        </div>
        <div class="col-12 px-5">
          <h1 class="mb-5">Will You Join Us?</h1>
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="jobs-group">
                <h3>Program Management</h3>
                <span>
                  <p>
                    <strong
                      >Senior Engineering Program Manager, Software Device
                      Experiences</strong
                    >
                  </p>
                  <p class="city">San Francisco, CA</p>
                </span>
              </div>
              <div class="jobs-group mt-5">
                <h3>Operations</h3>
                <span>
                  <p>
                    <strong>Head of Customer Experience</strong>
                  </p>
                  <p class="city">San Francisco, CA</p>
                </span>
              </div>
              <div class="jobs-group mt-5">
                <h3>General Interest</h3>
                <span>
                  <p>
                    <strong>General Interest in Humane</strong>
                  </p>
                  <p class="city">San Francisco, CA</p>
                </span>
              </div>
              <div class="jobs-group mt-5">
                <h3>Hardware</h3>
                <span>
                  <p>
                    <strong
                      >Senior Hardware Engineer, System Integration</strong
                    >
                  </p>
                  <p class="city">San Francisco, CA</p>
                  <p>
                    <strong>Senior RF Engineer</strong>
                  </p>
                  <p class="city">San Francisco, CA</p>
                  <p>
                    <strong>Senior Product Design Engineer</strong>
                  </p>
                  <p class="city">San Francisco, CA</p>
                </span>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="jobs-group">
                <h3>Security</h3>
                <p>
                  <strong>Senior Software Engineer, Services Security</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Senior Software Engineer, Privacy</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Lead Software Engineer, Product Security</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Engineering Manager, Product Security</strong>
                </p>
                <p class="city">San Francisco, CA</p>
              </div>
              <div class="jobs-group mt-5">
                <h3>Software</h3>
                <p>
                  <strong>Software Engineer, Cellular Integration</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Software Engineer, Android Telephony</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Senior System Software Engineer, WiFi</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Senior System Software Engineer, Framework</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong
                    >Senior System Software Engineer, Cellular
                    Validation</strong
                  >
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong
                    >Senior Software Engineer, Device Experiences -
                    Capture</strong
                  >
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Senior Software Engineer, Device Experiences</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Senior Site Reliability Engineer</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Senior Computer Vision Engineer</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Lead Software Engineer, Build and Release</strong>
                </p>
                <p class="city">San Francisco, CA</p>
                <p>
                  <strong>Computational Photography Engineer</strong>
                </p>
                <p class="city">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Navbar />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: black;
  color: white;
  height: 100vh;
  .custom-container {
    height: calc(100% - 56px);
    overflow-y: scroll;
    max-width: 960px;
    margin: 0 auto;
    overflow-x: hidden;
    scrollbar-width: none;
    .city {
      color: lightgray;
      font-size: 0.85rem;
    }
    h1 {
      animation: 0.5s ease-in-out 0s 1 slideInTopTitle;
    }
    p {
      animation: 1s ease-in-out 0s 1 slideInTop;
    }
    section {
      min-height: 100vh;
      .left {
        p {
          font-size: 104px;
          font-weight: 700;
          line-height: 91px;
        }
      }
    }
  }
}
@keyframes slideInTop {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInTopTitle {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
