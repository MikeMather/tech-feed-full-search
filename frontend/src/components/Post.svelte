<script lang="ts">
  import type { Post } from "src/types";
import { formatPublishedAt } from "../utils/dateUtils";
  import Author from "./Author.svelte";
import Timestamp from "./Timestamp.svelte";

  export let post: Post;
</script>

<a href={post.url}>
  <article>
      <picture>
        <source srcset={post.image} />
        <img src="/img/fallback.png" alt="Featured post">
      </picture>
      <div class="title">
        <Author feedName={post.feedName} />
        <h1>{post.title}</h1>
        {#if post.headline}
          <div class="headlines">{@html post.headline}...</div>        
        {/if}
        <Timestamp timestamp={post.publishedAt || post.createdAt} />
      </div>
  </article>
</a>

<style>
  article {
    width: 100%;
    background-color: var(--background-color-alt);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 0 auto 35px auto;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    position: relative;
  }

  .title {
    width: 260px;
  }

  picture {
    width: 280px;
    max-width: 280px;
    min-width: 280px;
    margin-right: 15px;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 8px;
    max-width: 370px;
  }

  .headlines {
    font-size: 0.8rem;
    color: #666882;
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    h1 {
      max-width: 500px;
    }

    .title {
      width: 50%;
    }
  }

  @media (max-width: 425px) {
    article {
      justify-content: center;
    }

    picture {
      margin: 0;
    }
  }
</style>