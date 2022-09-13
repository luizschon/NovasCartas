<template>
  <Header />
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<script>
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped>
</style>
