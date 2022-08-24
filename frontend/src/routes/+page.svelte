<script lang="ts">
  import type { PageData } from "@sveltejs/kit/types/internal";

  export let data: PageData & { feed: any };
</script>

<h1>Welcome to SvelteKit {JSON.stringify(data.feed[0])}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
