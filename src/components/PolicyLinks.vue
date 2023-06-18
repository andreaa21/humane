<script>
export default {
  name: "PolicyLinks",
};
</script>

<template>
  <div class="links position-fixed">
    <a class="p-2" href="#">Privacy Policy</a>
    <a class="p-2" href="#">Terms Of Use</a>
  </div>
</template>

<style lang="scss" scoped>
.links {
  top: 28px;
  right: 40px;
  font-size: 12px;
  a {
    color: #ccc;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
}
</style>
