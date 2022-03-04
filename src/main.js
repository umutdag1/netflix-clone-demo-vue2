import Vue from 'vue'
import App from './App.vue'
import {router} from './router'

export const eventBus = new Vue({
  methods : {
    changeComponent : function(selectedComponent){
      this.$emit("selectedComponent",selectedComponent)
    },
    sendUserInput : function(userInput) {
      this.$emit("userInput",userInput)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
