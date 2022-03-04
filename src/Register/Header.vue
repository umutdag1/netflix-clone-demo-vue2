<template>
  <nav class="navbar navbar-expand border-bottom">
    <div class="container">
      <span class="navbar-brand w-100"
        ><img
          src="../assets/Netflix-Logo.png"
          alt=""
          :style="[
            { width: logoSize + '%' },
            { minWidth: (logoSize * 10) / 2 + 'px' },
          ]"
      /></span>
      <div class="navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/SignIn" tag="a" class="nav-link text-dark"
              ><strong>Oturum Aç</strong></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      logoSize: 25,
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
</style>
