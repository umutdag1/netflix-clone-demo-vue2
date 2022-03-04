<template>
  <div class="card text-white container p-5 w-100" :style="[{ background: bg },{maxWidth : userImaxWidth + 'px'}]">
    <div class="card-body">
      <h2 class="card-title mb-4">Oturum Aç</h2>
      <div class="card-text">
        <Form></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
export default {
  components: {
    Form,
  },
  data: function () {
    return {
      bg: "rgba(0,0,0,0.8)",
      userImaxWidth: 500,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

@media screen and (max-width: 720px) {
  .card{
    max-width: 100% !important;
  }
}
</style>
