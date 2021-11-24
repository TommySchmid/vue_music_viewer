<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1601312378427-822b2b41da35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
    }"
  >
    <p>Welcome to Crate Companion!</p>
    <p>Please select an option above to get started.</p>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column; 
  height: 1000px;
}

#main p {
    color: white;
}
</style>