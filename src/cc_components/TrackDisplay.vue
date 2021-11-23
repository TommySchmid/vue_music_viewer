<template>
  <div class="trackDisplay">
    <div>
      Keep an eye out for these top {{tracks.artist}} tracks!
    </div>
    <div v-for="track in tracks" :key="track.name">
      {{ track.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackDisplay",
  props: ["tracks"],
  methods: {},
};
</script>

<style scoped>

.trackDisplay div {
  box-shadow: 5px 10px 15px white;
  color: white;
  margin: 0px 200px 0px;
}
</style>