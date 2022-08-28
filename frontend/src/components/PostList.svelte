<script lang="ts">
	import { onMount } from 'svelte';
  import type { Post as IPost } from "src/types";
  import { routes } from "../utils/routes";
  import Api from "../utils/Api";
  import Post from "./Post.svelte";
import { browser } from '$app/env';
  
  export let posts: IPost[] = [];
  let page = 1;

  const click = async () => {
    page = page + 1;
    console.log('Page ', page);
  }

  const loadPages = async (pages: number) => {
    if (pages === 1) return;
    const data: IPost[] = await Api.get(routes.feed, { 
      params: { page: pages }
    })
    const feed = Object.values(data);
    posts = [...posts, ...feed];
  }

  const updateSearchParam = () => {
    if (!browser || page === 1) return;
    const url = new URL(window.location.href);
    const params = new window.URLSearchParams(window.location.search);
    params.set('page', page.toString());
    url.search = params.toString();
    const newUrl = url.toString();
    window.history.replaceState({url: newUrl}, '', newUrl);
  }

  const getInitialPages = () => {
    if (!browser) return;
    const params = new window.URLSearchParams(window.location.search);
    const searchPage = params.get('page');
    if (searchPage) {
      page = parseInt(searchPage);
    }
  }

  $:{
    loadPages(page)
    updateSearchParam();
  }

  onMount(() => {
    getInitialPages();
  })
</script>

<div>
  <h5>RECENT</h5>
  {#each posts as post (post.id)}
    <Post post={post} />
  {/each}
  <button on:click={click}>Load more</button>
</div>

<style>
  div {
    max-width: 900px;
    margin: auto;
  }

  h5 {
    margin: 20px 0 8px 0;
  }

  @media (min-width: 600px) {
    div {
      padding: 20px;
    }
  }
</style>