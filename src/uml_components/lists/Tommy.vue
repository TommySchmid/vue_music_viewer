<template>
  <div>
    <div id="main">Tommy's List</div>
    <Form @tommyFormSubmit="addToList" />
    <div v-if="this.submissionError">
      <p id="error">
        There was an issue with your submission. Please refresh and try again.
      </p>
    </div>
    <div v-if="this.fetchError">
      <p id="error">The network is not currently available</p>
    </div>

    <div v-if="this.display">
      <Fav_List :artists="this.fetchedList" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "../../form/Form.vue";
import Fav_List from "../Fav_List.vue";

export default {
  name: "Tommy",
  components: {
    Form,
    Fav_List,
  },
  data() {
    return {
      fetchedList: "",
      display: false,
      fetchError: false,
      submissionError: false
    };
  },
  methods: {
    fetchFavorites() {
      axios
        .get("https://vue-umlcc-tommy-default-rtdb.firebaseio.com/.json")
        .then((response) => {
          this.fetchedList = response.data;
          this.display = true;
        })
        .catch(() => {
          this.fetchError = true;
        });
    },
    addToList(artist) {
      axios
        .post(
          "https://vue-umlcc-tommy-default-rtdb.firebaseio.com/.json",
          JSON.stringify(artist)
        )
        .then(() => {
          this.fetchFavorites();
        })
        .catch(() => {
          this.submissionError = true;
        });
    },
  },
  mounted() {
    this.fetchFavorites();
  },
};
</script>

<style scoped>
#main {
  color: white;
}

#error {
  color: white;
  background-color: red;
  margin: 0px 25% 0px;
}
</style>