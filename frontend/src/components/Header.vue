<template>
  <header class="header-outer">
    <div class="header-inner">
      <div id="nav">
        <router-link to="/" class="nav-item">Novas</router-link> | 
        <router-link to="/register" class="nav-item">Registrar</router-link> | 
        <router-link to="/login" class="nav-item">Login</router-link> |
        <router-link to="/devs" class="nav-item">Devs</router-link>
      </div>
      <h1 id="page-title">NovasCartas</h1>
    </div>
  </header>
</template>
  
<script>
export default {
  name: "Header",
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

a {
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
  
