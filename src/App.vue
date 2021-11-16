<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1178&q=80)',
    }"
  >
    <Header />
    <Form />
    <AlbumDisplay />
    <TrackDisplay />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import AlbumDisplay from "./components/AlbumDisplay.vue"
import TrackDisplay from "./components/TrackDisplay.vue"

export default {
  name: "App",
  components: {
    Header,
    Form,
    AlbumDisplay,
    TrackDisplay
  },
};
</script>

<style>
#main {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 1000px;
}
</style>
