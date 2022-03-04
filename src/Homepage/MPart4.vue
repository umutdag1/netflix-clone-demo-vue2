<template>
  <div class="MPart4" :style="[{ backgroundColor: bgColor }]">
    <div class="container pt-5 text-white">
      <h1 class="display-4 text-center pb-4">Sıkça Sorulan Sorular</h1>
      <div
        class="contents w-100 mx-auto mt-3"
        v-for="i in 5"
        :style="[
          { minWidth: contentMinWidth + 'px' },
          { maxWidth: contentMaxWidth + 'px' },
        ]"
      >
        <div
          class="row bg-secondary"
          :style="[{ cursor: cursorType }]"
          @click="changeClickShowContentsEvent(i)"
        >
          <div class="col-12 h2 px-5 ">
            <div class="float-start py-4">{{ contentsTitles[i - 1] }}</div>
            <div
              class="d-inline-block float-end h1 text-white ps-4 pt-4 overflow-visible"
              v-if="clickShowContents[i - 1] === true"
            >
              &times
            </div>
            <div class="d-inline-block float-end h1 text-white ps-4 pt-4 overflow-visible " v-else>+</div>
          </div>
        </div>
        <div
          class="row mt-1 bg-secondary"
          v-if="clickShowContents[i - 1] === true"
        >
          <div class="col-12 h4 px-5 py-3">
            {{ contentsP1[i - 1]
            }}<template v-if="contentsP2[i - 1] !== ''"><br /><br /></template
            >{{ contentsP2[i - 1] }}
          </div>
        </div>
      </div>
      <h5 class="mx-auto mb-4 mt-5 text-center">
        İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için
        e‑posta adresinizi girin.
      </h5>
      <Form></Form>
    </div>
  </div>
</template>

<script>
import Form from './Form.vue'
export default {
  components : {
    Form
  },
  data: function () {
    return {
      bgColor: "black",
      contentsTitles: [
        "Netflix nedir?",
        "Netflix'in maliyeti nedir?",
        "Nerede izleyebilirim?",
        "Nasıl iptal ederim?",
        "Netflix'te ne izleyebilirim?",
      ],
      contentsP1: [
        "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir yayın hizmetidir.",
        "Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 17,99 TL ile 41,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.",
        "İstediğiniz yerde, istediğiniz zaman, sınırsız sayıda cihazda izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.",
        "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.",
        "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.",
      ],
      contentsP2: [
        "Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
        "",
        "Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün.",
        "",
        "",
      ],
      clickShowContents: [false, false, false, false, false],
      contentMinWidth: 546,
      contentMaxWidth: 600,
      cursorType: "pointer",
      btnColor: "#e50914",
    };
  },
  methods: {
    changeClickShowContentsEvent: function (number) {
      for (let i = 0; i < this.clickShowContents.length; i++) {
        if (i === number - 1) {
          if (this.clickShowContents[i]) {
            this.clickShowContents[i] = false;
          } else {
            this.clickShowContents[i] = true;
          }
        } else {
          this.clickShowContents[i] = false;
        }
        this.$forceUpdate();
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.MPart4 {
  border-bottom: 8px solid #222 !important;
}

@media screen and (max-width: 620px) {
  * {
    overflow-x: auto;
  }
  .contents {
    overflow-x: visible;
  }
}
</style>
