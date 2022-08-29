<script lang="ts">
import type { Post } from "src/types";
import Author from "./Author.svelte";
import Timestamp from "./Timestamp.svelte";

  export let isMain: boolean = false;
  export let post: Post;
</script>

<a href={post.url}>
  <div class="container" class:isMain>
    <picture>
      <source srcset={post.image} />
      <img src="/img/fallback.png" alt="Featured post">
    </picture>
    <Author feedName={post.feedName} small={!isMain} />
    <h1>{post.title}</h1>
    <Timestamp timestamp={post.publishedAt || post.createdAt} />
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: var(--text-color);
    flex: 1;
    margin-bottom: 20px;
  }

  picture {
    border-radius: 5px;
  }

  picture img {
    width: 100%;
  }

  h1 {
    margin: 0;
    font-size: 1rem;
    min-width: 200px;
  }

  .isMain h1 {
    font-size: 2.5rem;
  }

  .container {
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--background-color-alt);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .container {
      padding: 20px;
    }

    h1 {
      font-size: 1.2rem;
    }
  }

  a:nth-child(2) .container {
    margin-bottom: 0;
  }

  .isMain {
    padding: 20px;
    height: 100%;
    flex-basis: 100%;
  }

  .isMain.container {
    margin: 0;
    min-width: 420px;
  }
</style>