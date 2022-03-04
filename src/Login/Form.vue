<template>
  <form>
    <div class="form-floating mb-4">
      <input
        type="email"
        class="form-control bg-dark text-white border border-dark"
        id="floatingInput"
        placeholder="E-posta"
      />
      <label for="floatingInput">E-posta</label>
    </div>
    <div class="form-floating mb-5">
      <input
        type="password"
        class="form-control bg-dark text-white border border-dark"
        id="floatingPassword"
        placeholder="Parola"
      />
      <label for="floatingPassword">Parola</label>
    </div>
    <button
      type="submit"
      class="btn mb-4 w-100 text-white py-3"
      :style="[{ backgroundColor: btnColor }]"
    >
      Oturum Aç
    </button>
    <div class="row mb-4">
      <div class="col-6 form-check">
        <input type="checkbox" class="form-check-input bg-dark" id="Check" />
        <label class="form-check-label" for="Check">Beni Hatırla</label>
      </div>
      <div class="col-6 text-end">
        <a href="#" class="text-decoration-style h6 text-secondary"
          >Yardım ister misiniz?</a
        >
      </div>
    </div>
    <div class="text-secondary">Netflix'e katılmak ister misiniz? <router-link to="/" class="text-decoration-style text-white">Şimdi kaydolun.</router-link></div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      btnColor: "#e50914",
    };
  },
};
</script>

<style scoped>
.text-decoration-style {
  text-decoration: none;
}

.text-decoration-style:hover {
  text-decoration: underline;
}
</style>
