<template>
  <div class="albumDisplay">
    <div v-for="album in albums" v-bind:key="album">
      <img :src="album.image[2]['#text']"
        />
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