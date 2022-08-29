<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ msg }}</p>
    <p id="date">{{ date }}</p>
  </div>
</template>

<script>
  export default {
    name: "NewsCard",
    props: {
      title: String,
      msg: String,
      date: String
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
