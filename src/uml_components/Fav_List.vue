<template>
  <div id="listItemContainer">
    <div id="listItem" v-for="artist in artists" :key="artist.name">
      {{ artist.artist }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Fav_List",
  props: ["artists"],
};
</script>

<style scoped>
  #listItemContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }

  #listItem {
    color: greenyellow;
    background-color: green;
    height: 100%;
    margin: 5px;
    flex-wrap: nowrap;
  }
</style>