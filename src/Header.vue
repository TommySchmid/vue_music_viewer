<template>
  <div class="welcome">
    <div id="app">
      <router-link to="/crate-companion">
        Crate Companion
      </router-link>
      <div class="img">
        <router-link to="/">
          <img src="https://hostedimages-cdn.aweber-static.com/MTQ0MjU1NQ==/original/3250f960b0184f7498c125c0748dce50.png"
          />
        </router-link>
      </div>
      <router-link to="/uml">
        Ultimate Music List   
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgb(117, 117, 117);
  color: white;
}

.img {
  width: 100%;
  height: 100px;
  background-color: black;
}

.img img {
  height: 100px;
}

.welcome {
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
}
</style>