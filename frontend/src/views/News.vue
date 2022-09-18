<template>
  <div id="news-grid" v-if="newsList" ref="newsGrid">
    <NewsCard v-for="news in newsList" :key="news._id" :news="news" />
  </div>
  <div v-if="currentPage === null">
    <div id="bottom-div" @click="scrollToTop">Go to top</div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';
import { getNews } from '../api/news.js';
import { useUser } from '../store/user.js';

export default {
  components: {
    NewsCard
  },
  setup() {
    const store = useUser();
    return { store };
  },
  data() {
    return {
      newsList: [],
      currentPage: 1,
      isLoading: false,
    }
  },
  watch: {
    'store.user'() {
      if (this.store.user) {
        this.loadNews(this.store.user._id);
      }
    }
  },
  // Exemplo de uso das funções da api
  async mounted() {
    this.loadNews();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async loadNews(userId = null) {
      try {
        const res = await getNews(userId);
        this.newsList = res.data;
      } catch (err) {
        console.error(err);    // Deu errado
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
