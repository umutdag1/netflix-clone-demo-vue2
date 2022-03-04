<template>
  <form>
    <div class="form-floating mb-4">
      <input
        type="email"
        class="form-control border border-secondary"
        id="floatingInput"
        v-model="userInput"
        placeholder="E-posta"
      />
      <label for="floatingInput">E-posta</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control border border-secondary"
        id="floatingPassword"
        placeholder="Parola"
      />
      <label for="floatingPassword">Parola</label>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="Check" />
      <label class="form-check-label" for="Check"
        >Netflix özel teklifleri e-posta ile gönderilmesin.</label
      >
    </div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      btnColor: "#e50914",
      input: "",
    };
  },
  props: {
    userInput: {
      type: String,
      required: true,
    },
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
