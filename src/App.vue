<template>
  <div id="app">
    <Header></Header>
    <Feed></Feed>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Feed from "./components/Feed.vue";

export default {
  name: "app",
  components: {
    Header,
    Feed
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #fafafa;
  font: 14px Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased !important;
}
</style>
