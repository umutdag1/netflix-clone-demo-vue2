<template>
  <div class="row mt-4">
    <div class="col-6" v-for="i in 2">
      <div class="row">
        <div class="col-md-6" v-for="j in 2">
          <ul class="footer-list">
            <li class="my-2" v-for="z in 4">
              <a class="link-hover-underline text-secondary" href="">
                {{ getListContent(i - 1, j - 1, z - 1) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      listContents: [
        "SSS",
        "Yatırımcı İlişkileri",
        "Kullanım Koşulları",
        "Bize Ulaşın",
      ],
      listContents2: [
        "Yardım Merkezi",
        "İş İmkanları",
        "Gizlilik",
        "Hız Testi",
      ],
      listContents3: [
        "Hesap",
        "Hediye Kartı Kullan",
        "Çerez Tercihleri",
        "Yasal Hükümler",
      ],
      listContents4: [
        "Medya Merkezi",
        "İzleme Yolları",
        "Kurumsal Bilgiler",
        "Netflix Orijinal İçerikleri",
      ],
    };
  },
  methods: {
    getListContent: function (i, j, z) {
      let val = null;
      if (i == 0 && j == 0) {
        val = this.listContents[z];
      } else if (i == 0 && j == 1) {
        val = this.listContents2[z];
      } else if (i == 1 && j == 0) {
        val = this.listContents3[z];
      } else {
        val = this.listContents4[z];
      }
      return val;
    },
  },
};
</script>

<style scoped>
.link-hover-underline {
  text-decoration: none !important;
}

.link-hover-underline:hover {
  text-decoration: underline !important;
}

.footer-list {
  margin-bottom: -0.5rem !important;
  list-style-type: none !important;
}
</style>
