<template>
  <div class="form">
    <form>
      <p>
        Search for your favorite band and find a list of their most popular
        albums and tracks below!
      </p>
      <input v-model="artist" />
      <br />
      <button v-on:click="onSubmit">Submit</button>
    </form>
    <div>
      <template v-if="display && errorMessage === undefined">
        <AlbumDisplay v-bind:albums="this.topAlbums" />
        <TrackDisplay v-bind:tracks="this.topTracks" />
      </template>
      <div v-else>{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import AlbumDisplay from "./AlbumDisplay.vue";
import TrackDisplay from "./TrackDisplay.vue";


export default {
  name: "Form",
  components: {
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
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .get(
          `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.artist}&api_key=ec2f1febe013b411a18b994f9cdb9319&format=json`
        )
        .then((response) => {
          // console.log(response);
          this.errorMessage = response.data.message;
          this.topAlbums = response.data.topalbums.album.slice(0, 5);
          this.display = true;
        })
        .catch((error) => console.log(error));
      axios
        .get(
          `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.artist}&api_key=ec2f1febe013b411a18b994f9cdb9319&format=json`
        )
        .then((response) => {
          // console.log("track", response);
          this.topTracks = response.data.toptracks.track.slice(0, 10);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.form p {
  color: white;
}
</style>
