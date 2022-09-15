<template>
  <div id="news-grid">
    <NewsCard v-for="news in newsList" :key="news.id" :news="news" />
  </div>
</template>

<script setup>
import NewsCard from '../components/NewsCard.vue';
import { getNews } from '../api/news.js';
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
    } catch (err) {
      console.error(err);    // Deu errado
    }
  }
}
</script>

<style scoped>
#news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 15px;
  border-radius: 10px;
  margin: 50px auto 250px auto;
  width: 90%;
  max-width: 1000px;
}

@media (max-width: 850px) {
  #news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  #news-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
