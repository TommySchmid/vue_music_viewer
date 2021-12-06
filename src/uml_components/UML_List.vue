<template>
  <div id="main">
    <div id="listItem" v-for="listItem in fetchedList" :key="listItem">{{ listItem }}</div>
  </div>
</template>

<script>
export default {
  name: "UML_List",
  props: ["fetchedList"],
};
</script>

<style scoped>
  #main {
    display: flex;
  }

  #listItem {
    color: greenyellow;
    background-color: green;
    margin: 3px 25% 3px;
  }
</style>
