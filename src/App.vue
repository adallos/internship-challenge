<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import TheHeading from "./components/TheHeading";
export default {
  components: {
    TheHeading
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
</style>
