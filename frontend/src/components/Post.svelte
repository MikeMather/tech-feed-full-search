<script lang="ts">
  import type { Post } from "src/types";
import { formatPublishedAt } from "../utils/dateUtils";
  import Author from "./Author.svelte";

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
        <time datetime={post.publishedAt || post.createdAt}>{formatPublishedAt(post.publishedAt || post.createdAt)}</time>
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
    margin-bottom: 35px;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    position: relative;
  }


  img {
    width: 100%;
    max-width: 280px;
    margin-right: 15px;
    border-radius: 5px;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 8px;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    h1 {
      max-width: 500px;
    }
  }

  time {
    font-size: 0.8rem;
    color: var(--text-color-light);
    margin-top: 15px;
  }
</style>