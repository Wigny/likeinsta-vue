<template>
  <header>
    <div class="header-content">
      <img src="@/assets/logo.svg" alt="LikeInsta" />
      <img src="@/assets/camera.svg" alt="Publicar" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
</style>