<template>
  <div id="main">
    John's List
  </div>
</template>

<script>
export default {
  name: "John",
  props: ["artists"],
};
</script>

<style scoped>
  #main {
    color: white;
  }
</style>