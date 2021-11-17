<template>
  <div>
    Hey!
    <div v-for="album in albums" v-bind:key="album">
      <img :src="album.image[2]['#text']"
        />
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

<style></style>