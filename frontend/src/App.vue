<template>
  <div id="page-title">
    <h1>NovasCartas</h1>
  </div>
  <div id="news-grid">
    <SearchBar id="search-bar" />
    <NewsCard
      v-for="news in newsList"
      :key="news.id"
      :news="news"
    />
  </div>
</template>

<script setup>
  import NewsCard from './components/NewsCard.vue';
  import SearchBar from './components/SearchBar.vue';
  import { getNews } from './api/news.js';
</script>

<script>
  export default {
    data() {
      return {
        newsList: [],
      }
    },
    // Exemplo de uso das funções da api
    async mounted() {
      try {
        const res = await getNews();
        this.newsList = res.data
      } catch(err) {
        console.error(err);    // Deu errado
      }
    }
  }
</script>

<style scoped>
  #page-title {
    width: 100%;
    margin: 100px auto 50px auto;
  }
  #news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    border-radius: 10px;
    margin: 50px auto 250px auto;
    width: 90%;
    max-width: 1000px;
  }
  #search-bar {
    grid-column-start: 1;
    grid-column-end: 4;
  }
</style>
