<template>
  <div style="height: 1rem;" v-if="store.user">
    <a class="statistics-button" v-if="showStatistics" @click="showStatistics=false">Esconder Estatísticas</a>
    <a class="statistics-button" v-if="!showStatistics" @click="showStatistics=true">Mostrar Estatísticas</a>
  </div>
  <div class="statistics-container" v-if="showStatistics && store.user">
    <div class="terms-table">
      <h3 class="table-section">Termos Curtidos</h3>
      <div class="liked-terms terms-box" v-for="item in likedTerms">
        <div class="term-key">{{ item[0] }}</div>
        <div class="term-value">{{ item[1] }}</div>
      </div>
      <hr style="margin: 1.5rem auto; width: 10rem;" />
      <h3 class="table-section">Termos Detestados</h3>
      <div class="disliked-terms terms-box" v-for="item in dislikedTerms">
        <div class="term-key">{{ item[0] }}</div>
        <div class="term-value">{{ item[1] }}</div>
      </div>
    </div>
  </div>
  <div id="news-grid" v-if="newsList" ref="newsGrid">
    <NewsCard v-for="news in newsList" :key="news._id" :news="news" />
  </div>
  <!-- <div v-if="currentPage === null"> RIP paginação -->
    <div id="bottom-div" @click="scrollToTop">Go to top</div>
  <!-- </div> -->
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
      likedTerms: {},
      dislikedTerms: {},
      showStatistics: false,
      currentPage: 1,
      isLoading: false,
    }
  },
  watch: {
    'store.user'() {
      if (this.store.user) {
        this.loadNews(this.store.user._id);
        this.likedTerms = this.store.user.liked_terms;
        this.likedTerms = Object.entries(this.likedTerms).sort((a, b) => b[1] - a[1]);

        this.dislikedTerms = this.store.user.disliked_terms;
        this.dislikedTerms = Object.entries(this.dislikedTerms).sort((a, b) => b[1] - a[1]);
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

.terms-table {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  width: 100%;
  height: 25rem;
  overflow: scroll;
  overflow-x: hidden;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgb(204, 204, 204);
}

.table-section {
  text-decoration: underline;
  margin-bottom: 1rem;
}

.terms-box {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.term-key {
  padding: 0.2rem 0.8rem;
  border-radius: 5px;
  background-color: rgb(27, 117, 202);
  box-shadow: rgba(36, 36, 36, 0.2) 0px 0px 4px 0px;
  color: var(--font-color-primary);
}

.disliked-terms > .term-key {
  background-color: rgb(194, 15, 15);
}

.statistics-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;
  color: black;
  background-color: #dedede;
  box-shadow: rgba(36, 36, 36, 0.2) 0px 0px 8px 0px;
  padding: 1rem;
  border-radius: 5px;
  position: fixed;
  top: 5rem;
  right: 0;
  margin: 2rem;
  min-width: 13rem;
  max-height: 25rem;
  gap: 2rem;
  z-index: 2;
}

.statistics-button {
  align-self: center;
  transition: all;
  transition-duration: 0.4s;
}

.statistics-button:hover {
  transition: all;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: underline;
  background-color: var(--background-color-secondary);
  padding: 0.8rem;
  border-radius: 5px;
  box-shadow: rgba(36, 36, 36, 0.2) 0px 0px 8px 0px;
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
