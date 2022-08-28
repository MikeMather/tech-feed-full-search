<script lang="ts">
  import type { Post } from "src/types";
  import FeaturedPost from "./FeaturedPost.svelte";

  export let featuredPosts: Post[] = [];
</script>

<div class="section">
  <div class="container">
    <div class="main">
      <h5>Top</h5>
      <FeaturedPost post={featuredPosts[0]} isMain />
    </div>
    <div class="side">
      <FeaturedPost post={featuredPosts[1]} />
      <FeaturedPost post={featuredPosts[2]} />
    </div>
  </div>
</div>

<style>
  h1 {
    padding-left: 10px;
    margin: 0;
  }

  h5 {
    margin: 0 0 8px 0;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .section {
    margin: auto;
  }

  @media (min-width: 600px) {
    .section {
      margin-bottom: 40px;
    }
    
    .main {
      padding: 10px;
    }

    .side {
      padding: 10px;
      margin: 0;
    }
  }

  .main {
    box-sizing: border-box;
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .side { 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 20px;
    flex: 1;
  }
</style>