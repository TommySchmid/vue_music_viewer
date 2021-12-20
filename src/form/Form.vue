<template>
  <div className="form">
    <form>
      <input v-model="artist" v-on:keyup="btnIsDisabled = false" type="text" />
      <br />
      <button v-on:click="formSubmit" v-bind:disabled="btnIsDisabled">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      artist: null,
      btnIsDisabled: true,
    };
  },
  methods: {
    formSubmit() {
      this.$emit("formSubmit", this.artist);
      this.$emit("kaylaFormSubmit", this.artist);
      this.$emit("melissaFormSubmit", this.artist);
      this.$emit("johnFormSubmit", this.artist);
      this.$emit("mikeFormSubmit", this.artist);
      this.$emit("rachaelFormSubmit", this.artist);
      this.$emit("tommyFormSubmit", this.artist);
      this.artist = null;
      this.btnIsDisabled = true;
    },
  },
};
</script>

<style scoped>
.form p {
  color: rgb(180, 162, 162);
}

.errorMessage {
  color: white;
}
</style>
