<template>
  <div>
    <div class="header-bg-image inset-box-shadow" :style="{ zIndex: lowRank }">
      <nav class="navbar navbar-expand">
        <div class="container">
          <span class="navbar-brand"
            ><img
              src="../assets/Netflix-Logo.png"
              alt=""
              :style="[
                { width: logoSize + '%' },
                { minWidth: (logoSize * 10) / 2 + 'px' },
              ]"
          /></span>
          <div class="navbar-collapse">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/SignIn" tag="a" class="nav-link btn text-white" :style="[
                    { backgroundColor: btnColor },
                    { width: logoSize * 8 + 'px' },
                  ]">Oturum Aç</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="header-content text-white position-relative text-center"
        :style="{ zIndex: highRank }"
      >
        <h1 class="header-content-title display-4 mx-auto mb-3">
          Sınırsız film, dizi ve çok daha fazlası.
        </h1>
        <h3 class="mb-5">
          İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.
        </h3>
        <h5 class="mx-auto mb-4">
          İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek
          için e‑posta adresinizi girin.
        </h5>
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
      logoSize: 18,
      btnColor: "#e50914",
      highRank: 999,
      lowRank: -1,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.header-bg-image {
  background-image: url("../assets/2.jpg") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  height: 740px !important;
  border-bottom: 8px solid gray !important;
}

.header-bg-image::before {
  content: "" !important;
  background-color: black !important;
  width: 100% !important;
  height: 740px !important;
  position: absolute !important;
  opacity: 0.6 !important;
}

.inset-box-shadow {
  box-shadow: inset 0px 0px 40px 20px black !important;
}

.header-content {
  padding: 50px 5% !important;
  margin-top: 100px !important;
}

.header-content-title {
  max-width: 740px !important;
}

.header-input-group {
  max-width: 750px !important;
  height: 60px !important;
}
</style>
