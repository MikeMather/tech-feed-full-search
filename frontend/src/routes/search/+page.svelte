<script lang="ts">
  import type { PageData } from "@sveltejs/kit/types/internal";
  import Post from "../../components/Post.svelte";
  import type { Post as IPost } from "../../types";
  import { goto } from '$app/navigation';
  import { routes } from "../../utils/routes";

  export const prerender = false;

  export let data: PageData & { 
    results: IPost[]
    query: string
  };
  let { query } = data;
  const submit = (e: any) => {
    goto(`${routes.search}?q=${e.target.searchVal.value}`);
  }
</script>

<div class="form-container">
  <form on:submit|preventDefault={submit}>
    <input type="text" bind:value={query} name="searchVal" />
  </form>
</div>
<div class="results">
  {#each data.results as post (post.id)}
    <Post post={post} />
  {/each}
</div>

<style>
  .results {
    max-width: 900px;
    margin: auto;
  }

  .form-container {
    width: 100%;
    margin: 30px 0;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border: none;
    box-sizing: border-box;
    font-size: 1.2rem;
    background-color: #202027;
    color: var(--text-color);
    border-radius: 30px;
    outline: none;
  }
</style>