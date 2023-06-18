<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="menu d-flex justify-content-center align-items-center">
    <ul class="d-flex">
      <li class="px-2">
        <router-link to="/" class="link-style">Home</router-link>
      </li>
      <li class="px-2">
        <router-link class="link-style" to="/jobs">Join Us</router-link>
      </li>
      <li class="px-2">
        <router-link class="link-style" to="/team">Our Team</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.link-style {
  text-decoration: none;
  color: white;
  opacity: 1;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu {
  height: 56px;
  background-color: black;
  padding: 0 20px;
  color: white;
}
</style>
