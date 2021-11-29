<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)',
    }"
  >
    <div id="button">
      <router-link to="/uml" custom v-slot="{ navigate }">
        <div @click="navigate">Return to Ultimate Music List</div>
      </router-link>
    </div>
    <p>UML Favorites</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UML_Favorites",
  data() {
    return {
      artist: "",
    };
  },
  methods: {
    fetchFavorites() {
      axios
        .get("https://ultimate-favorite-list-default-rtdb.firebaseio.com/.json")
        .then((response) => {
          console.log(response);
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

#button {
  background-color: green;
  color: greenyellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
</style>