<template>
  <div
    class="card mx-auto mt-5 border-0 overflow-auto"
    :style="[
      { minWidth: ImgMinWidth + 'px' },
      { width: ImgWidth + '%' },
      { maxWidth: ImgMaxWidth + 'px' },
    ]"
  >
    <img src="../assets/devices.png" alt="" class="card-img-top" />
    <div class="card-body text-center">
      <p class="card-text">ADIM <strong>1</strong> / <strong>2</strong></p>
      <p class="card-text h5">
        <strong>Hesabınızın kurulumunu tamamlayın.</strong>
      </p>
      <p class="card-text h5">
        Netflix sizin için kişiselleştirilir. İstediğiniz zaman, istediğiniz
        cihazda Netflix'i izlemek için bir parola oluşturun.
      </p>
      <p></p>
      <button
        @click="goNext"
        class="btn text-white w-100 rounded-0 mt-3"
        :style="[{ backgroundColor: btnColor }]"
      >
        DEVAM ET
      </button>
      <p>{{input}}</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  data: function () {
    return {
      ImgMinWidth: 300,
      ImgWidth: 50,
      ImgMaxWidth: 400,
      btnColor: "#e50914",
      input: "",
    };
  },
  methods: {
    goNext: function () {
      eventBus.changeComponent("MiddlePartStep2");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>
