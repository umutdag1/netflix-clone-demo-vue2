<template>
  <div
    class="card mx-auto mt-5 border-0"
    :style="[
      { minWidth: ImgMinWidth + 'px' },
      { width: ImgWidth + '%' },
      { maxWidth: ImgMaxWidth + 'px' },
    ]"
  >
    <img
      src="../assets/checkmark.png"
      alt=""
      class="card-img-top w-25 mx-auto"
    />
    <div class="card-body text-center">
      <p class="card-text">ADIM <strong>2</strong> / <strong>2</strong></p>
      <p class="card-text h3">Hesabınız başarıyla oluşturuldu.</p>
      <div class="row card-text my-2 text-start" v-for="i in 3">
        <div class="col-2 pt-md-4 pt-sm-4 pt-4 text-center">
          <img src="../assets/checkmark.png" alt="" width="50" />
        </div>
        <div
          class="h5 fw-normal col-10 pt-4 mx-auto"
          >{{ contents[i - 1] }}
        </div>
      </div>
      <router-link to="/SignIn" class="btn text-white w-100 rounded-0 mt-3" :style="[{backgroundColor : btnColor}]">OTURUM AÇ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ImgMinWidth: 300,
      ImgWidth: 25,
      ImgMaxWidth: 600,
      btnColor: "#e50914",
      contents : ["Taahhüt yok, istediğiniz zaman iptal edin.","Tek ve düşük bir ücretle, Netflix'teki her şey önünüzde.","Tüm cihazlarınızda sınırsız izleme imkânı."],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>
