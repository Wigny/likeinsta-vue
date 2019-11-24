<template>
  <div>
    <form action>
      <div class="inline-flex-parent">
        <Media class="media" :media="media"></Media>
        <textarea name="description" placeholder="Escreva uma descrição" />
      </div>
      <input name="place" type="text" placeholder="Adicionar localização" />
      <input name="hashtags" type="text" placeholder="Adicionar hashtags" />
      <button type="submit">Compartilhar</button>
    </form>
  </div>
</template>

<script>
import Media from "./Media.vue";

export default {
  components: {
    Media
  },
  data() {
    return {
      media: {
        filename: "d10b9e84-9591-4d68-9c24-28feb34966aa.jpg",
        mimetype: "image/jpeg",
        url:          "https://likeinsta.blob.core.windows.net/files/d10b9e84-9591-4d68-9c24-28feb34966aa.jpg"
      }
    };
  }
};
</script>

<style scoped>
form {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 10px;

  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

.media {
  width: 150px;
  padding-right: 10px;
}

.inline-flex-parent {
  display: inline-flex;
  padding: 20px 0;
}

textarea {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 0 20px;
}

input {
  height: 38px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
}
button {
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  background: #7159c1;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>

