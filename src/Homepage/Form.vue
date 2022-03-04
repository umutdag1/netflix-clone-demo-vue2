<template>
  <div class="w-75 mx-auto mb-5">
    <div class="input-group header-input-group mx-auto">
      <input
        type="email"
        placeholder="E-posta adresi"
        class="form-control"
        v-model="userInput"
      />
      <router-link
        @click.native="sendUserInput"
        :disabled="checkUserInput"
        to="/SignUp"
        tag="button"
        class="input-group-button btn text-white"
        :style="{ backgroundColor: btnColor }"
        ><h5 class="pt-2">İZLEMEYE BAŞLA ></h5></router-link
      >
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  data: function () {
    return {
      btnColor: "#e50914",
      userInput: "",
    };
  },
  methods: {
    sendUserInput: function () {
      eventBus.sendUserInput(this.userInput);
    },
  },
  computed: {
    checkUserInput: function () {
      let regexI = this.userInput.search(
        /[a-z]+@(hotmail|gmail).(com|com.tr)/i
      );

      return !(regexI > -1);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 950px) {
  .input-group > .form-control {
    width: 100% !important;
  }

  .input-group-button {
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 10px !important;
  }
}
</style>
