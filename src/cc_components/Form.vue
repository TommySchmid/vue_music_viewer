<template>
  <div class="form">
    <form>
      <p>
        Search for your favorite band and find a list of their most popular albums and tracks below!
      </p>
      <input  
        v-model="artist" 
        v-on:keyup="btnIsDisabled = false"
        type="text"
      />
      <br />
      <button
        v-on:click="formSubmit"
        v-bind:disabled="btnIsDisabled"
      >Submit</button>
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
      this.$emit('formSubmit', this.artist);
      this.artist = null;
      this.btnIsDisabled = true;
    }
  },
};
</script>

<style scoped>
.form p {
  color: white;
}

.errorMessage {
  color: white;
}
</style>
