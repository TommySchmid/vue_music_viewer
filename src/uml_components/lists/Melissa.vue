<template>
  <div>
    <div id="main">Melissa's List</div>
    <Form @melissaFormSubmit="addToList"/>
    <div v-if="this.display">
      <Fav_List :artists="this.fetchedList" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Form from '../../form/Form.vue'
import Fav_List from '../Fav_List.vue'

export default {
  name: "Melissa",
    components: {
    Form,
    Fav_List
  },
  props: ["artists"],
  data() {
    return {
      fetchedList: "",
      display: false,
    };
  },
  methods: {
    fetchFavorites() {
      axios
        .get("https://vue-umlcc-melissa-default-rtdb.firebaseio.com/.json")
        .then((response) => {
          this.fetchedList = Object.values(response.data);
          this.display = true;
        })
        .catch((error) => {
          console.log("Favorites.vue", error);
        });
    },
    addToList(artist) {
      axios
        .post(
          "https://vue-umlcc-melissa-default-rtdb.firebaseio.com/.json",
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