<template>
  <div>
    <img v-if="type == 'image'" :src="media.url" />
    <video v-else-if="type == 'video'" :src="media.url" controls loop></video>
  </div>
</template>

<script>
export default {
  props: ["media"],
  created() {
    const mime = this.media.mimetype;
    this.type = mime.substring(0, mime.indexOf("/"));
  }
};
</script>

<style scoped>
img,
video {
  width: 100%;
}
</style>
