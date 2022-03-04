<template>
  <div>
    <Header></Header>
    <MiddlePart></MiddlePart>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import MiddlePart from "./MiddlePart";
import Footer from "./Footer.vue";
export default {
  components :{
    Header,
    MiddlePart,
    Footer
  }
};
</script>

<style scoped>
</style>
