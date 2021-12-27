<template>
  <div id="main" :style="image">
    <AuthUserSelector />
  </div>
</template>

<script>
import AuthUserSelector from "../form/AuthUserSelector.vue";

export default {
  name: "Auth",
  components: {
    AuthUserSelector
  },
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1601312378427-822b2b41da35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)",
      },
    };
  },
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  height: 1000px;
  color: white;
}
</style>