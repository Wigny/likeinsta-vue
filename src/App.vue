<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Feed from "./components/Feed.vue";
import NewPost from "./components/NewPost.vue";

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    const isFeed = false;
    return {
      dynamicComponent: isFeed ? Feed : NewPost // TODO: dynamic
    };
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
