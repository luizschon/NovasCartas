<template>
  <div class="card-container">
    <div ref="status" class="status-container">
      <div class="status-id">ID: {{ news._id }}</div>
      <div class="status-rating">RATING: {{ news.rating }}</div>
    </div>
    <div class="card" v-if="news" @mouseenter="showStatus" @mouseleave="hideStatus">
      <div class="rating-buttons">
        <button id="rating-up" v-on:click="ratingUp(news._id)">
          <span class="material-symbols-outlined">thumb_up</span>
        </button>
        <button id="rating-down" v-on:click="click=ratingDown(news._id)">
          <span class="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
      <div class="card-content">
        <a target="_blank" :href=news.url><h2>{{ news.title }}</h2></a>
        <p>{{ news.description }}</p>
        <p class="date">{{ news.date }}</p>
      </div>
    </div>
    <a :href=news.url target="_blank" id="news-source">{{ news.source }}</a>
  </div>
</template>

<script setup>
import api from '../api/base'
import { useUser } from '../store/user'
</script>

<script>
  export default {
    name: "NewsCard",
    props: {
      news: null,
    },
    // Funcionamento dos botões definido aqui
    methods: {
      ratingUp(id) {
        console.log("RATING UP - ID:", id);
        api.patch('/users/' + useUser().user._id + '/prefs', { news_id: this.news._id, rating_up: true })
      },
      ratingDown(id) {
        console.log("RATING DOWN - ID:", id);
      },
      showStatus(e) {
        const statusDiv = this.$refs.status;
        statusDiv.style.setProperty('visibility', 'visible');
      },
      hideStatus(e) {
        const statusDiv = this.$refs.status;
        statusDiv.style.setProperty('visibility', 'hidden');
      }
    }
  };
</script>

<style scoped>
  .card-container {
    height: fit-content;
    display: grid;
    grid-template-rows: 1fr auto;
    break-inside: avoid;
    margin-bottom: 20px;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 5px;
    background-color: var(--background-color-secondary);
    height: fit-content;
    margin-bottom: 5px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin: 10px 30px 30px;
  }
  .date {
    font-style: italic;
  }
  .rating-buttons {
    display: flex;
    align-self: flex-end;
    gap: 10px;
    padding: 15px 15px 0px;
  }
  #rating-up {
    width: fit-content;
    height: fit-content;
  }
  #rating-up:hover {
    color: rgb(24, 126, 221);
  }
  #rating-down {
    width: fit-content;
    height: fit-content;
  }
  #rating-down:hover {
    color: rgb(235, 15, 15);
  }
  #news-source {
    width: fit-content;
    padding: 0 0.5rem;
    margin: auto;
  }
  .status-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 0.8rem;
    color: black;
    background-color: #dedede;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;
    padding: 10px;
    border-radius: 5px;
    position: fixed;
    top: 0;
    right: 0;
    margin: 2rem;
    visibility: hidden;
    min-width: fit-content;
    z-index: 2;
  }
  a {
    text-decoration: none;
    color: rgb(194, 194, 194);
    width: 100%;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 30px;
  }
  button:hover {
    transition: all;
    transition-duration: 0.25s;
  }
  .material-symbols-outlined {
    font-size: 1.2rem;
  }
</style>
