<script>
import Nav from "../components/Nav.svelte";
export const ssr = true;

</script>
<style>
  main {
    width: 100%;
    height: 100%;
  }

  div {
    box-sizing: border-box;
    padding: 30px;
  }
</style>

<main>
  <Nav />
  <div>
    <slot></slot>
  </div>
</main>