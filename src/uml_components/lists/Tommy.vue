<template>
  <div>
    <div id="main">Tommy's List</div>
    <Form @tommyFormSubmit="addToList" />
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
    };
  },
  methods: {
    fetchFavorites() {
      axios
        .get("https://vue-umlcc-tommy-default-rtdb.firebaseio.com/.json")
        .then((response) => {
          this.fetchedList = response.data;
          this.display = true;
          console.log(response);
          console.log(this.fetchedList);
        })
        .catch((error) => {
          console.log("Favorites.vue", error);
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
</style>