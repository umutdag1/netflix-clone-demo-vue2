<template>
  <div class="Footer" :style="[{ backgroundColor: bgColor }]">
    <div class="container pt-3">
      <div class="pt-5">
        <h6 class="content-subtitle text-secondary">
          Sorularınız mı var?
          <a
            class="link-hover-underline text-secondary"
            href="tel:0850-390-7444"
            >0850-390-7444
          </a>
          numaralı telefonu arayın
        </h6>
        <FooterListContents></FooterListContents>
        <button
          class="language-btn btn border border-secondary mt-4 p-3"
          :style="[{ width: btnWidth + 'px' }]"
          @click="btnOpen = !btnOpen"
        >
          <div class="row">
            <div class="col-4">
              <img src="../../src/assets/global.svg" alt="" class="w-100" />
            </div>
            <div class="col-4 pt-1 text-white">{{ language }}</div>
            <div class="offset-1 col-3 pt-1">
              <img
                src="../../src/assets/sort-down.svg"
                alt=""
                class="text-light w-100"
              />
            </div>
          </div>
        </button>
        <div
          class="language-btn row mt-1 border border-secondary border-top-0 text-white text-center"
          :style="[{ width: btnWidth + 'px' }]"
          v-show="btnOpen === true"
        >
          <div class="col-12" @click="changeLang('Türkçe')">Türkçe</div>
          <div class="col-12" @click="changeLang('English')">English</div>
        </div>
      </div>
      <h6 class="last-text mt-4 text-secondary">Netflix Türkiye</h6>
    </div>
  </div>
</template>

<script>
import FooterListContents from './Footer-List-Contents'
export default {
  components : {
      FooterListContents
  },
  data: function () {
    return {
      bgColor: "black",
      btnWidth: 170,
      language: "Türkçe",
      btnOpen: false,
      highRank: 999,
      lowRank: -1,
    };
  },
  methods: {
    changeLang: function (lang) {
      this.language = lang;
      this.btnOpen = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.Footer {
  padding-bottom: 2.0rem;
}

.content-subtitle {
  padding-left: 2rem !important;
}

.link-hover-underline {
  text-decoration: none !important;
}

.link-hover-underline:hover {
  text-decoration: underline !important;
}

.language-btn {
  margin-left: 2rem !important;
}

.language-btn:last-child div:first-child:hover {
  background-color: darkcyan;
  cursor: default;
}

.language-btn:last-child div:last-child:hover {
  background-color: darkcyan;
  cursor: default;
}

.last-text {
  margin-left: 2rem !important;
}
</style>
