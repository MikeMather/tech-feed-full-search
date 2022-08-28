

<nav>
  <p>Logo</p>
  <input type="text" placeholder="Search over 2,000 posts" />
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
    padding: 12px;
    border: 0;
    border-radius: 30px;
    width: 300px;
    outline: none;
    background-color: #434b56;
    color: var(--text-color);
  }

  input::placeholder {
    color: var(--text-color-light);
  }
</style>