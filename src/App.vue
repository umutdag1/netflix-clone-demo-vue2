<template>
  <div id="app">
    <keep-alive include="MiddlePartStep2">
      <router-view></router-view>
    </keep-alive>
    <!--<Register></Register>-->
  </div>
</template>

<script>
import Homepage from "./Homepage/Homepage.vue";
import Login from "./Login/Login.vue";
import Register from "./Register/Register.vue";
export default {
  components: {
    Homepage,
    Login,
    Register,
  },
};
</script>

<style>
</style>
