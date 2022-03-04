<template>
  <div class="MPart3" :style="[{ backgroundColor: bgColor }]">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-7 mt-5">
          <div class="mt-5">
            <h1 class="text-white display-4">İstediğiniz her yerde izleyin.</h1>
            <h3 class="text-white pt-3">
              Ekstra ücret ödemeden telefonda, tablette, bilgisayarda,
              televizyonda sınırsız film ve dizi izleyin.
            </h3>
          </div>
        </div>
        <div class="col-lg-5">
          <div
            class="position-relative mx-auto"
            :style="[{ backgroundColor: bgColor },{maxWidth: tvWidth+'px'}]"
          >
            <video
              ref="videoRef"
              muted
              loop
              class="part3-tv-video position-absolute"
              :style="[{width : videoWidth + '%'},{maxWidth: videoMaxWidth+'px'}]"
            ></video>
            <img
              src="../assets/devicepile.png"
              alt=""
              class="part3-tv-img position-relative w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      bgColor: "black",
      tvWidth: 500,
      videoWidth : 63,
      videoMaxWidth : 500
    };
  },
  mounted: function () {
    this.$refs.videoRef.src = "../src/assets/videodevices.m4v";
    this.$refs.videoRef.play();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.MPart3 {
  border-bottom: 8px solid #222 !important;
}

.part3-tv-img {
  top: 0 !important;
  left: 0 !important;
  margin-top: 75px !important;
}

.part3-tv-video {
  /*margin-left: 100px;*/
  margin-top: 75px !important;
  transform : translate(30%,21%) !important;
}

@media screen and (max-width: 991px) {
  .row {
    text-align: center !important;
  }
}
</style>

