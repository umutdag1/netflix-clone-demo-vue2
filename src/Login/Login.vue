<template>
  <div class="bg-image">
    <Header></Header>
    <MiddlePart></MiddlePart>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import MiddlePart from './MiddlePart.vue'
import Footer from './Footer.vue'
export default {
  components: {
    Header,
    MiddlePart,
    Footer
  },
};
</script>

<style scoped>
.bg-image {
  background-image: linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("../../src/assets/2.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100% !important;
}

@media screen and (max-width: 720px) {
  .bg-image {
    background: rgba(0,0,0,1) !important;
  }
}
</style>
