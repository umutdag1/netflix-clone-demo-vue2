<template>
  <div>
    <Header></Header>
    <component :is="selectedComponent" v-bind="componentProperties">
    </component>
    <!--<MiddlePart></MiddlePart>-->
    <!--<MiddlePart2></MiddlePart2>-->
    <!--<MiddlePart3></MiddlePart3>-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import MiddlePartStep1 from "./MiddlePartStep1.vue";
import MiddlePartStep2 from "./MiddlePartStep2.vue";
import MiddlePartStep3 from "./MiddlePartStep3.vue";
import Footer from "./Footer.vue";
import { eventBus } from "../main.js";

export default {
  components: {
    Header,
    MiddlePartStep1,
    MiddlePartStep2,
    MiddlePartStep3,
    Footer,
  },
  data: function () {
    return {
      selectedComponent: "MiddlePartStep1",
      userInput: "",
    };
  },
  computed: {
    componentProperties: function () {
      if (this.selectedComponent === "MiddlePartStep2") {
        return {
          userInput: this.userInput,
        };
      }
    },
  },
  created: function () {
    eventBus.$on("selectedComponent", (value) => {
      this.selectedComponent = value;
    });
    eventBus.$on("userInput", (value) => {
      this.userInput = value;
    });
  },
};
</script>

<style scoped>
</style>
