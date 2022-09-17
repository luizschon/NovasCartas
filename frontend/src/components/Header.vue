<template>
  <!-- <h1 @click="clicked">LOL</h1> -->
  <header class="header-outer">
    <div class="header-inner">
    <div ref="profpic" class="profile-container" v-if="store.user">{{ store.user.name }}</div>
      <div id="nav">
        <router-link to="/" class="nav-item">Novas</router-link> | 
        <span v-if="!store.isAuthenticated">
          <router-link to="/register" class="nav-item">Registrar</router-link> | 
          <router-link to="/login" class="nav-item">Login</router-link> |
        </span>
        <span v-if="store.isAuthenticated">
          <a @click="logoutUser" class="nav-item">Logout</a> |
        </span>
        <router-link to="/devs" class="nav-item">Devs</router-link>
      </div>
      <h1 id="page-title">NovasCartas</h1>
    </div>
  </header>
</template>

<script>
import { useUser } from '../store/user'
import router from '../router';
import Alert from '../alert';

const alert = new Alert({
  infoIcon: 'info',
  infoTitle: 'Logout realizado com sucesso',
});

export default {
  name: "Header",
  setup() {
    const store = useUser();
    return { store };
  },
  methods: {
    logoutUser() {
      this.store.logout();
      router.push('/');
      alert.fireInfo();
    },
    clicked(data) {
      console.log(this.store.user.name);
      this.$refs.profpic.innerText = this.store.user.name;
    }
  }
};
</script>
  
<style scoped>

.header-outer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 12rem;
  top: calc(9rem - 12rem);
  z-index: 2;
}

.header-inner {
  width: 100%;
  height: 9rem;
  position: sticky;
  top: 0;
  background-image: linear-gradient(var(--background-color-primary) 75%, transparent);
}

#nav {
  padding: 15px;
}

.profile-container {
  margin: 1rem;
  font-size: 0.8rem;
  background-color: red;
  width: fit-content;
  padding: 10px;
  margin: 2rem;
  border-radius: 5px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;
  color: black;
  background-color: #dedede;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: all;
  transition-duration: 0.4s;
  padding: 7px 10px;
}

a:hover {
  transition: all;
  transition-duration: 0.3s;
  background-color: var(--background-color-secondary);
  border-radius: 7px;
}

</style>
  
