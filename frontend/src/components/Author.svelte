<script lang="ts">
  export let feedName: string;
  export let small: boolean = false;
  const imageName = (name: string) => {
    return name.replace(/\s/g, "").toLowerCase();
  }
</script>

<div class="author" class:small>
  <img src={`/img/${imageName(feedName)}.png`} alt={feedName} />
  <p>{feedName}</p>
</div>

<style>
  .author {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 0;
  }

  p {
    font-size: 0.8rem;
    color: var(--text-color-light);
  }

  img {
    width: 50px;
    margin-right: 10px;
  }

  .small img {
    width: 30px;
  }

  .small p {
    font-size: 0.6rem;
  }
</style>