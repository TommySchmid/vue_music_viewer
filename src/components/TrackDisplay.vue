<template>
  <div class="trackDisplay">
    <div v-for="track in tracks" :key="track.name">
      {{ track.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackDisplay",
  props: ["tracks"],
  methods: {
  }
};
</script>

<style scoped>
.trackDisplay {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.trackDisplay div {
  box-shadow: 5px 10px 15px white;
  color: white;
}
</style>