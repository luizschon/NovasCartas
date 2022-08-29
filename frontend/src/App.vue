<template>
  <div id="page-title">
    <h1>NovasCartas</h1>
  </div>
  <div id="news-grid">
    <SearchBar id="search-bar" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
    <NewsCard title="The best hip-hop hits" msg="This is a certified hood classic" date="12/04/2022" />
  </div>
</template>

<script setup>
  import NewsCard from './components/NewsCard.vue';
  import SearchBar from './components/SearchBar.vue';
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
