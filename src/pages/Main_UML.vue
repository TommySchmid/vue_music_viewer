<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)',
    }"
  >
    <div id="button">
      <router-link to="/ultimate-favorite-list" custom v-slot="{ navigate }">
        <div @click="navigate">Go to Ultimate Favorite List</div>
      </router-link>
    </div>
    <p>Ultmate Music List</p>
    <Form @formSubmit="umlAdd" />
    <p v-if="errorMessage">{{ this.errorMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";
import Form from "../form/Form.vue";

export default {
  name: "Main_UML",
  components: {
    Form,
  },
  data() {
    return {
      artist: "",
      errorMessage: undefined,
    };
  },
  methods: {
    umlAdd(artist) {
      this.artist = artist;
      axios
        .post(
          "https://ultimate-music-list.firebaseio.com/.json",
          JSON.stringify(artist)
        )
        .then(() => {
          axios
            .get("https://ultimate-music-list.firebaseio.com/.json")
            .then((response) => {
              console.log(response);
            });
        })
        .catch(() => {
          this.errorMessage = "The network is currently unavailable";
        });
    },
  },
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  height: 1000px;
}

p {
  color: white;
}

#button {
  background-color: green;
  color: greenyellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
</style>