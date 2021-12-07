<template>
  <div id="main" :style="image">
    <div id="button">
      <!-- <router-link to="/uml">
        Return to Ultimate Music List
      </router-link> -->
    </div>
    <div id="names">
      <router-link to="/ultimate-favorite-list/kayla"> Kayla </router-link>
      <router-link to="/ultimate-favorite-list/melissa"> Melissa </router-link>
      <router-link to="/ultimate-favorite-list/john"> John </router-link>
      <router-link to="/ultimate-favorite-list/mike"> Mike </router-link>
      <router-link to="/ultimate-favorite-list/rachael"> Rachael </router-link>
      <router-link to="/ultimate-favorite-list/tommy"> Tommy </router-link>
    </div>
    <p>UML Favorites</p>
    <div id="listItemContainer" v-if="this.display">
      <Fav_List :artists="this.fetchedList" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import Fav_List from "../uml_components/Fav_List.vue";

export default {
  name: "Favorites",
  data() {
    return {
      user: ''
    }
  },
  components: {
    Fav_List,
  },
  data() {
    return {
      fetchedList: "",
      display: false,
      image: {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)",
      },
    };
  },
  methods: {
    fetchFavorites() {
      axios
        .get("https://ultimate-favorite-list-default-rtdb.firebaseio.com/.json")
        .then((response) => {
          this.fetchedList = Object.values(response.data);
          this.display = true;
        })
        .catch((error) => {
          console.log("Favorites.vue", error);
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

#listItemContainer {
  justify-content: center;
}

#names {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#names a {
  margin: 5px;
  color: white;
  text-decoration: underline;
}
</style>