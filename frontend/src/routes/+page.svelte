<script lang="ts">
  import type { PageData } from "@sveltejs/kit/types/internal";
  import Hero from "../components/Hero.svelte";
  import type { Post as IPost } from "src/types";
  import { onMount } from "svelte";
  import PostList from "../components/PostList.svelte";

  export let data: PageData & { feed: IPost[] };
  // @ts-ignore
  const posts = data.feed.slice(3);
  onMount(async () => {
    const flamethrower = await import('flamethrower-router');
    const router = flamethrower.default();
  })
</script>


<PostList posts={data.feed} />