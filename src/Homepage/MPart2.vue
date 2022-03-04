<template>
  <div class="MPart2" :style="[{ backgroundColor: bgColor }]">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-5">
          <div class="position-relative">
            <img src="../assets/mobile.jpg" alt="" class="w-100" :style="[{minWidth : mobileminWidth+'px'},{maxWidth : mobilemaxWidth+'px'}]" />
            <div
              class="card mx-auto border border-dark border-3 "
              :style="[
                {minWidth : minCardWidth + 'px'},
                { maxWidth: maxCardWidth + 'px' },
                { backgroundColor: bgColor },
              ]"
            >
              <div class="card-body">
                <div class="card-text">
                  <div class="row">
                    <div class="col-3 pt-2 pt-sm-1">
                      <img src="../assets/boxshot.png" alt=""  class="w-100"/>
                    </div>
                    <div class="col-6 py-2 py-sm-4 py-md-4 py-lg-4">
                      <div class="text-white">Stranger Things</div>
                      <div class="text-primary">İndiriliyor....</div>
                    </div>
                    <div class="col-3 pt-4 pt-sm-3 pt-md-3 pt-lg-3">
                      <img
                        src="../assets/download-icon.gif"
                        alt=""
                        class="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 mt-5">
          <div class="mt-5">
            <h1 class="text-white display-4">
              Çevrimdışı izlemek için içerikleri indirin.
            </h1>
            <h3 class="text-white pt-3">
              En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek
              bir şeyleriniz olsun.
            </h3>
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
      minCardWidth: 0,
      maxCardWidth: 400,
      mobileminWidth: 100,
      mobilemaxWidth: 700
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.MPart2{
  border-bottom: 8px solid #222 !important;
}

.card {
  border-radius: 15px !important;
}

@media screen and (max-width: 991px) {
  .col-lg-6 {
    text-align: center !important;
  }
}
</style>
