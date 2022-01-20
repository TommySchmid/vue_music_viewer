<template>
  <div>
    <div id="main">John's List</div>
    <Form @johnFormSubmit="addToList" />
    <div v-if="this.submissionError">
      <p id="error">
        There was an issue with your submission. Please refresh and try again.
      </p>
    </div>
    <div v-if="this.fetchError">
      <p id="error">The network is not currently available</p>
    </div>

    <div v-if="this.display === 'uml'">
      <Fav_List :artists="this.fetchedList"
        @deleteUserListItem="deleteItem"
      />
    </div>
    <div v-if="this.display === 'vinyl'">
      <Fav_List :artists="this.fetchedList"
        @deleteUserListItem="deleteItem"
      />
    </div>
    <button v-if="this.display === 'uml'" @click="fetchVinyl">
      Click to view John's Vinyl Collection
    </button>
    <button v-else-if="this.display === 'vinyl'" @click="fetchFavorites">
      Click to view John's Ultimate Music List
    </button>
  </div>
</template>

<script>
import axios from "axios";
import Form from "../../form/Form.vue";
import Fav_List from "../Fav_List.vue";

export default {
  name: "John",
  components: {
    Form,
    Fav_List,
  },
  data() {
    return {
      fetchedList: "",
      fetchedToken: this.$store.state.token,
      display: null,
      fetchError: false,
      submissionError: false,
    };
  },
  methods: {
    fetchFavorites() {
      axios
        .get("https://vue-umlcc-john-default-rtdb.firebaseio.com/uml.json")
        .then((response) => {
          this.fetchedList = response.data;
          this.display = "uml";
        })
        .catch(() => {
          this.fetchError = true;
        });
    },
    addToList(artist) {
      if (this.display === "uml") {
        axios
          .post(
            `https://vue-umlcc-john-default-rtdb.firebaseio.com/uml.json/?auth=${localStorage.getItem(
              "idToken"
            )}`,
            JSON.stringify(artist)
          )
          .then(() => {
            this.fetchFavorites();
          })
          .catch(() => {
            this.submissionError = true;
          });
      } else if (this.display === "vinyl") {
        axios
          .post(
            `https://vue-umlcc-john-default-rtdb.firebaseio.com/vinyl/.json/?auth=${localStorage.getItem(
              "idToken"
            )}`,
            JSON.stringify(artist)
          )
          .then(() => {
            if (this.display === "uml") {
              this.fetchFavorites();
            } else if (this.display === "vinyl") {
              this.fetchVinyl();
            }
          })
          .catch(() => {
            this.submissionError = true;
          });
      }
    },
    fetchVinyl() {
      axios
        .get("https://vue-umlcc-john-default-rtdb.firebaseio.com/vinyl.json")
        .then((response) => {
          this.fetchedList = response.data;
          this.display = "vinyl";
        })
        .catch(() => {
          this.fetchError = true;
        });
    },
    deleteItem(deleteArtist) {
      console.log('john here', deleteArtist);
    }
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