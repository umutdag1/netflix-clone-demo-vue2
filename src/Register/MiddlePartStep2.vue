<template>
  <div
    class="card mx-auto mt-5 border-0"
    :style="[
      { minWidth: ImgMinWidth + 'px' },
      { width: ImgWidth + '%' },
      { maxWidth: ImgMaxWidth + 'px' },
    ]"
  >
    <div class="card-body">
      <p class="card-text">ADIM <strong>1</strong> / <strong>2</strong></p>
      <p class="card-text h4">
        <strong>Üyeliğinizi başlatmak için bir parola oluşturun.</strong>
      </p>
      <p class="card-text h5 font-weight-normal fw-normal">
        Sadece birkaç adım daha kaldı, sonra bitiyor! Biz de formaliteyi hiç
        sevmiyoruz.
      </p>
      <Form :userInput="userInput"></Form>
      <button
        @click="goNext"
        class="btn text-white w-100 rounded-0 mt-3"
        :style="[{ backgroundColor: btnColor }]"
      >
        DEVAM ET
      </button>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import {eventBus} from '../main.js'
export default {
  components: {
    Form,
  },
  data: function () {
    return {
      ImgMinWidth: 300,
      ImgWidth: 50,
      ImgMaxWidth: 700,
      btnColor: "#e50914",
    };
  },
  methods: {
    goNext: function () {
      eventBus.changeComponent("MiddlePartStep3");
    },
  },
  props: ["userInput"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>
