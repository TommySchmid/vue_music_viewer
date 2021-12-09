<template>
  <div
    id="main"
    :style="image"
  >
    <div id="button">
      <router-link to="ultimate-favorite-list">
        Go to Ultimate Favorite List
      </router-link>
    </div>
    <p>Ultmate Music List</p>
    <Form @formSubmit="umlAdd" />
    <p v-if="errorMessage">{{ this.errorMessage }}</p>
    <div v-if="fetchedList">
      <null_UML_List :fetchedList = "this.fetchedList" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "../form/Form.vue";
import null_UML_List from "../uml_components/null_UML_List.vue";

export default {
  name: "UML",
  components: {
    Form,
    null_UML_List
  },
  data() {
    return {
      artist: "",
      fetchedList: undefined,
      errorMessage: undefined,
      image: { backgroundImage: "url(https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)" }
    };
  },
  methods: {
    umlAdd(artist) {
      this.artist = artist;
      axios
        .post(
          "https://vue-ultimate-music-list-default-rtdb.firebaseio.com/.json",
          JSON.stringify(artist)
        )
        .then(() => {
          this.umlFetch();
        })
        .catch(() => {
          this.errorMessage = "The network is currently unavailable";
        });
    },
    umlFetch() {
      axios
        .get(
          "https://vue-ultimate-music-list-default-rtdb.firebaseio.com/.json"
        )
        .then((response) => {
          this.fetchedList = Object.values(response.data);
        });
    },
  },
  created() {
    this.umlFetch();
  }
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

a {
  color: greenyellow;
  text-decoration: none;
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