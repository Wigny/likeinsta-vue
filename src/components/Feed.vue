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

      <img v-bind:src="post.image" alt="Post" />

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
import gql from "graphql-tag";
export const GET_POSTS = gql`
  subscription MyQuery {
    posts(order_by: { createdAt: desc }) {
      id
      user {
        name
      }
      place
      image
      likes
      description
      hashtags
    }
  }
`;

export default {
  data() {
    return {
      posts: [],
      error: null
    };
  },
  apollo: {
   $subscribe: {
     posts: {
       query: GET_POSTS,
       result ({data: {posts}}) {
         this.posts = posts
       },
     },
   },
 },
  // apollo: {
  //   posts: {
  //     query: GET_POSTS,
  //     error(error) {
  //       this.error = JSON.stringify(error.message);
  //     }
  //   }
  // }
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

article > img {
  width: 100%;
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