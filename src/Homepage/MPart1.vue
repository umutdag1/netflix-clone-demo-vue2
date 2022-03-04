<template>
  <div class="MPart1" :style="[{ backgroundColor: bgColor }]">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-7 mt-5">
          <div class="mt-5">
            <h1 class="text-white display-4">
              Televizyonunuzda izleyebilirsiniz.
            </h1>
            <h3 class="text-white pt-3">
              Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              oynatıcılar ve daha fazlasında seyredin.
            </h3>
          </div>
        </div>
        <div class="col-lg-5 mt-md-5">
          <div
            class="position-relative w-100"
            :style="{ backgroundColor: bgColor }"
          >
            <video
              ref="videoRef"
              muted
              loop
              class="part1-tv-video position-absolute"
              :style="[
                { width: tvWidth - 20 + '%' },
                { maxWidth: maxtvWidth + 'px' },
              ]"
            ></video>
            <img
              src="../assets/tv.png"
              alt=""
              class="part1-tv-img position-relative"
              :style="[
                { width: tvWidth + '%' },
                { maxWidth: maxtvWidth + 100 + 'px' },
              ]"
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
      tvWidth: 100,
      maxtvWidth: 500,
    };
  },
  mounted: function () {
    this.$refs.videoRef.src =
      "../../src/assets/videotv.m4v";
    this.$refs.videoRef.play();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.MPart1 {
  border-bottom: 8px solid #222 !important;
}

.part1-tv-img {
  top: 0 !important;
  left: 0 !important;
  //margin-top: 45px !important;
}

.part1-tv-video {
  //margin-top: 45px !important;
  transform: translate(16%,30%);
}

@media screen and (max-width: 991px) {
  .row {
    text-align: center !important;
  }
}
</style>
