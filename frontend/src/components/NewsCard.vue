<template>
  <div class="card" v-if="news">
    <h2>{{ news.title }}</h2>
    <p>{{ news.description }}</p>
    <p id="date">{{ news.date }}</p>
  </div>
</template>

<script>
  export default {
    name: "NewsCard",
    props: {
      news: null,
    },
  };
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    background-color: var(--background-color-secondary);
    padding: 45px 35px;
  }
  .card:hover {
    color: green; /* apenas para visualizacao */
  }
  #date {
    font-style: italic;
  }
</style>
