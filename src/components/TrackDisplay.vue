<template>
    <div>
      <div v-for="track in tracks" :key="track.name">
        {{ track.name }}
      </div>
    </div>
</template>

<script>
export default {
  name: "TrackDisplay",
  props: ["tracks"]
};
</script>

<style></style>