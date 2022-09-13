<template>
  <div id="page-title">
    <h1>NovasCartas</h1>
  </div>
  <div id="news-grid">
    <NewsCard
      v-for="news in newsList"
      :key="news.id"
      :news="news"
    />
  </div>
</template>

<script setup>
  import NewsCard from './components/NewsCard.vue';
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
    column-count: 3;
    gap: 10px;
    row-gap: 15px;
    border-radius: 10px;
    margin: 50px auto 250px auto;
    width: 90%;
    max-width: 1000px;
  }
</style>
