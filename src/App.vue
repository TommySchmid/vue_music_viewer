<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1178&q=80)',
    }"
  >
    <Header />
    <Form @formSubmit="artistSearch" />
    <div>
      <template v-if="display && errorMessage === undefined">
        <AlbumDisplay v-bind:albums="this.topAlbums" />
        <TrackDisplay 
          v-bind:tracks="this.topTracks"
        />
      </template>
      <div v-else-if="errorMessage" class="errorMessage">
        {{ errorMessage }}
      </div>
      <div v-else class="errorMessage">{{ networkError }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
  data() {
    return {
      artist: null,
      topAlbums: null,
      topTracks: null,
      display: false,
      btnIsDisabled: true,
      errorMessage: "",
      networkError: "",
    };
  },
  methods: {
    artistSearch(artist) {
      axios
        .get(
          `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=ec2f1febe013b411a18b994f9cdb9319&format=json`
        )
        .then((response) => {
          console.log("album", response);
          this.errorMessage = response.data.message;
          this.topAlbums = response.data.topalbums.album.slice(0, 5);
          this.display = true;
        })
        .catch(() => {
          this.networkError = "The network is currently unavailable";
        });
      axios
        .get(
          `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=ec2f1febe013b411a18b994f9cdb9319&format=json`
        )
        .then((response) => {
          console.log("track", response);
          this.topTracks = response.data.toptracks.track.slice(0, 10);
        })
        .catch((error) => console.log("error", error));
    },
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
