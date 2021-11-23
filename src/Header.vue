<template>
  <div>
    <div id="app">
      <router-link to="/crate-companion" tag="div">Crate Companion</router-link>
      <div class="img">
        <img
          src="https://hostedimages-cdn.aweber-static.com/MTQ0MjU1NQ==/original/3250f960b0184f7498c125c0748dce50.png"
          alt="Crate Companion"
        />
      </div>
      <router-link to="/uml" tag="div">Ultimate Music List</router-link>
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

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
</style>