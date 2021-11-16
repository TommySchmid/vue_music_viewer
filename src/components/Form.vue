<template>
    <div class="form">
        <form>
            <p>Search for your favorite band and find a list of their most popular albums and tracks below!</p>
            <input v-model="artist">
            <br />
            <button v-on:click="onSubmit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Form",
  data() {
      return {
          artist: null,
          topAlbums: null,
          topTracks: null
      }
  },
  methods: {
      onSubmit(event) {
          event.preventDefault();
          axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.artist}&api_key=ec2f1febe013b411a18b994f9cdb9319&format=json`)
            .then((response) => {
                console.log('album', response);
                this.topAlbums = response.data.topalbums.album.slice(0, 5);
            })
            .catch((error) => console.log(error));
          axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.artist}&api_key=ec2f1febe013b411a18b994f9cdb9319&format=json`)
            .then((response) => {
                console.log('track', response)
                this.topTracks = response.data.toptracks.track.slice(0, 5);
            })
            .catch((error) => console.log(error));

      }
  }
};
</script>

<style scoped>
    .form p{
        color: white;
    }
</style>
