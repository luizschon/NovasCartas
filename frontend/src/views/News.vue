<template>
  <div id="news-grid" ref="newsGrid">
    <NewsCard v-for="news in newsList" :key="news._id" :news="news" />
  </div>
  <div v-if="currentPage === null">
    <div id="bottom-div" @click="scrollToTop">Go to top</div>
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
      currentPage: 1,
      isLoading: false,
    }
  },
  // Exemplo de uso das funções da api
  async mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadNextPage();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async loadNextPage() {
      if (this.currentPage === null) return;
      try {
        const res = await getNews(this.currentPage);
        this.newsList = this.newsList.concat(res.data.news);
        this.currentPage = res.data.next_page;
      } catch (err) {
        console.error(err);    // Deu errado
      }
      this.isLoading = false;
    },
    handleScroll(e) {
      if (this.isLoading) return;

      let el = this.$refs.newsGrid.getBoundingClientRect();
      if (el.bottom <= window.innerHeight) {
        this.isLoading = true;
        this.loadNextPage();
      }
    },
    scrollToTop() {
      window.scroll(0, 0);
    },
  },
};

</script>

<style scoped>
#news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 15px;
  border-radius: 10px;
  margin: 50px auto 10px auto;
  width: 90%;
  max-width: 1000px;
}

#bottom-div {
  cursor: pointer;
  width: fit-content;
  margin: 20px auto;
  padding: 7px 10px;
  transition: all;
  transition-duration: 0.4s;
}

#bottom-div:hover {
  border-radius: 7px;
  transition: all;
  transition-duration: 0.3s;
  background-color: var(--background-color-secondary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
