<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dishes</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Allura&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Allura&family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Allura&family=Montserrat&family=Secular+One&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-bottom: 30px;
  background-color: #f2c15d;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 18px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
