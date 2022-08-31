<script lang="ts">
  import { goto } from '$app/navigation';
  import { routes } from '../utils/routes';

  const submit = (e: any) => {
    goto(`${routes.search}?q=${e.target.searchVal.value}`);
  }
</script>

<nav>
  <p>Logo</p>
  <form on:submit|preventDefault={submit}>
    <input type="text" name="searchVal" placeholder="Search over 2,000 posts" />
  </form>
</nav>

<style>
  nav {
    width: 100%;
    height: 70px;
    padding: 10px;
    background-color: #2d333b;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }

  input {
    padding: 12px 18px;
    border: 0;
    border-radius: 30px;
    width: 300px;
    outline: none;
    background-color: #434b56;
    color: var(--text-color);
    box-sizing: border-box;
  }

  input::placeholder {
    color: #989898;
  }
</style>