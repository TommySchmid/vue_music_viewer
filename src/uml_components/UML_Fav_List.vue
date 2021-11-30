<template>
  <div>
    <div v-for="artist in artists" :key="artist.name">
      {{ artist.artist }}
    </div>
  </div>
</template>

<script>
export default {
  name: "UML_Fav_List",
  props: ["artists"],
};
</script>