<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/posts">Posts</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  //
};
</script>

<style>
#app {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: black;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}

nav a {
  font-weight: bold;
  color: #bbc6d1;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
