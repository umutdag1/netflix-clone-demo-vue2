<template>
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
    </div>
  </nav>
</template>

<script>
export default {
  data : function(){
    return {
      logoSize: 18,
      highRank: 999,
      lowRank: -1,
    }
  }
};
</script>

<style scoped>
</style>
