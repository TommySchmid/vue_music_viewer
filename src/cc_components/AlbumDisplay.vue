<template>
  <div class="albumDisplay">
    <div v-for="album in albums" :key="album.name">
      <a :href="album.url" target="_blank"><img :src="album.image[2]['#text']"
        /></a>
      <br />
      {{ album.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumDisplay",
  props: ["albums"],
};
</script>

<style scoped>
  .albumDisplay{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .albumDisplay div{
    margin: 5px;
    color: white;
  }
</style>