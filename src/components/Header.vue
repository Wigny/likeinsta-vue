<template>
  <header>
    <div class="header-content">
      <img src="@/assets/logo.svg" alt="LikeInsta" />

      <input type="file" ref="file" @change="uploadFile()" accept="image/*, video/*" />

      <button @click="addFile()" v-if="!loading">
        <img src="@/assets/camera.svg" alt="Publicar" />
      </button>
      <img v-else src="@/assets/loading.svg" alt="Carregando" />
    </div>
  </header>
</template>

<script>
import axios from "axios";

const URL = "https://likeinsta-uploads.azurewebsites.net/";

export default {
  name: "Header",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async uploadFile() {
      this.loading = true;

      const file = this.$refs.file.files[0];
      const formData = new FormData();

      formData.append("file", file);

      await axios
        .post(`${URL}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    addFile() {
      this.$refs.file.click();
    }
  }
};
</script>

<style scoped>
header {
  background: #fff;
  height: 72px;
  border-bottom: 1px solid #ddd;
}

header .header-content {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 72px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .header-content input {
  display: none;
}

header .header-content button {
  background: transparent;
  border: 0;
  cursor: pointer;
}
</style>