<template>
  <div class="search-bar">
    <input placeholder="Procure uma notícia" />
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
  };
</script>

<style scoped>
  input {
    font-family: inherit;
    font-size: 1.2rem;
    display: inline-block;
    box-sizing: border-box;
    block-size: auto;
    background-color: var(--background-color-secondary);
    padding: 12px 17px;
    outline: none;
    border-radius: 5px;
    border: 0;
    width: 100%;
  }
</style>
