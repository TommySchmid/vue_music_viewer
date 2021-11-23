<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1178&q=80)',
    }"
  >
    <Form @formSubmit="artistSearch" />
    <div id="main">
      <template v-if="display && errorMessage === undefined">
        <AlbumDisplay v-bind:albums="this.topAlbums" />
        <TrackDisplay v-bind:tracks="this.topTracks" />
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

import Form from "../cc_components/Form.vue";
import AlbumDisplay from "../cc_components/AlbumDisplay.vue"
import TrackDisplay from "../cc_components/TrackDisplay.vue"

export default {
  name: "Main_CC",
  components: {
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

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 1000px;
}

.errorMessage {
  color: white;
}
</style>
