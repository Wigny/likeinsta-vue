<template>
  <section>
    <article v-for="post in posts" v-bind:key="post.id">
      <header>
        <div class="user-info">
          <span>{{post.user.name}}</span>
          <span class="place">{{post.place}}</span>
        </div>

        <img src="@/assets/more.svg" alt="Mais" />
      </header>

      <Media :media="post.media"></Media>

      <footer>
        <div class="actions">
          <img src="@/assets/like.svg" alt="Like" />
          <img src="@/assets/comment.svg" alt="Comentar" />
          <img src="@/assets/send.svg" alt="Enviar" />
        </div>
        <strong>{{post.likes}} curtidas</strong>
        <p>
          {{post.description}}
          <span>
            <i>{{post.hashtags}}</i>
          </span>
        </p>
      </footer>
    </article>
  </section>
</template>

<script>
import Media from "./Media.vue";

export default {
  components: { Media },
  data() {
    return {
      posts: [
        {
          user: { name: "Wígny" },
          place: "Ji-Paraná",
          media: {
            filename: "d10b9e84-9591-4d68-9c24-28feb34966aa.jpg",
            mimetype: "image/jpeg",
            url:
              "https://likeinsta.blob.core.windows.net/files/d10b9e84-9591-4d68-9c24-28feb34966aa.jpg"
          },
          likes: 1500,
          description: "teste imagem",
          hashtags: "#testando"
        },
        {
          user: { name: "Wígny" },
          place: "Ji-Paraná",
          media: {
            filename: "6a115b55-4f52-4c58-91f5-38f87fba6103.mp4",
            mimetype: "video/mp4",
            url:
              "https://likeinsta.blob.core.windows.net/files/6a115b55-4f52-4c58-91f5-38f87fba6103.mp4"
          },
          likes: 3000,
          description: "teste video",
          hashtags: "#testando"
        }
      ],
      error: null
    };
  }
};
</script>

<style scoped>
section {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 10px;
}

article {
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
}

header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-info span {
  font-size: 13px;
}

.user-info span.place {
  font-size: 11px;
  color: #666;
  margin-top: 3px;
}

footer {
  padding: 20px;
}

footer .actions {
  margin-bottom: 10px;
}

/* footer .actions button {
  background: transparent;
  border: 0;
  cursor: pointer;
} */

article footer .actions img {
  height: 20px;
  margin-right: 10px;
}

footer p {
  font-size: 13px;
  margin-top: 2 px;
  line-height: 18px;
}

footer p span {
  color: #666;
  display: block;
}
</style>