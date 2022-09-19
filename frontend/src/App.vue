<template>
  <Header />
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
import { useUser } from "./store/user";
</script>

<script>
export default {
  async mounted() {
    await useUser().autoLogin();
  },
  name: "App",
  components: {
    Header,
  },
};
</script>
