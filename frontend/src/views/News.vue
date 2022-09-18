<template>
  <div class="busca-content">
    <form class="busca">
      <input v-on:keydown.enter.prevent='addCategory' type="text" id="barra-de-pesquisa" v-model="pesquisa" placeholder=" Pesquisar">
      <img class="icone-busca" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png">
    </form>
  </div>
  
  <div id="news-grid" ref="newsGrid">
    <NewsCard v-for="news in newsPesquisa" :key="news._id" :news="news" />
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
      pesquisa: '',
    }
  },
  computed: {
    newsPesquisa() {
      return this.newsList.filter(news => news.title.toLowerCase().includes(this.pesquisa.toLowerCase()));
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
.busca{
  width: 400px;
  
}

.busca-content{
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 50px;
}

input#barra-de-pesquisa{
  margin: 0 auto;
  width: 100%;
  height: 40px;
  padding: 0 0px;
  font-size: 0.9rem;
  border: 1px solid #D0CFCE;
  outline: none;
  border-radius: 8px 8px 8px 8px;
 }

input:focus {
  background-color: rgb(224, 247, 255);
}
.icone-busca{
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -59px;
  right: -15px;
}

::placeholder {
  font-style: italic;
}

</style>