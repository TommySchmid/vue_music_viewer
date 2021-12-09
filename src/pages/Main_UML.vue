<template>
  <div id="main" :style="image">
    <div id="button">
    </div>
    <div id="names">
      <router-link to="/ultimate-music-list/kayla"> Kayla </router-link>
      <router-link to="/ultimate-music-list/melissa"> Melissa </router-link>
      <router-link to="/ultimate-music-list/john"> John </router-link>
      <router-link to="/ultimate-music-list/mike"> Mike </router-link>
      <router-link to="/ultimate-music-list/rachael"> Rachael </router-link>
      <router-link to="/ultimate-music-list/tommy"> Tommy </router-link>
    </div>
    <p>UML Favorites</p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Main_UML",
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)",
      },
    };
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