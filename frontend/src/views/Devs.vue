<template>
  <h2 id="title">Desenvolvedores</h2>
  <div class="devs">
    <Dev v-for="dev in devList"
      :name=dev.name
      :image=dev.image
      :url=dev.url
    />
  </div>
  <a
    id="repo"
    href="https://github.com/luizschonarth/NovasCartas"
    target="_blank"
    title="Dá uma apertadinha"
  >:-)</a>
</template>

<script>
  import Dev from "../components/Dev.vue";
  export default {
    name: "App",
    components: {
      Dev,
    },
    data() {
      return {
        // Nome, profile do github e url do github (ordene em ordem alfabética se quiser)
        // { name: "Seu Nome Aqui", image: "https://github.com/seu-username.png?size=40", url: "https://github.com/seu-username" },
        devList: [
          { name: "Alexsander Correa", image: "https://github.com/KvotheKS.png?size=40", url: "https://github.com/KvotheKS" },
          { name: "Fernanda Macedo", image: "https://github.com/fernandams.png?size=40", url: "https://github.com/fernandams" },
          { name: "Gustavo Tomás", image: "https://github.com/gustavo-tomas.png?size=40", url: "https://github.com/gustavo-tomas" },
          { name: "Jonas Soares", image: "https://github.com/Arkhrer.png?size=40", url: "https://github.com/Arkhrer" },
          { name: "Lucas Ribas", image: "https://github.com/ribas858.png?size=40", url: "https://github.com/ribas858" },
          { name: "Luiz Carlos", image: "https://github.com/luizschonarth.png?size=40", url: "https://github.com/luizschonarth" },
          { name: "Marco Antônio", image: "https://github.com/masathayde.png?size=40", url: "https://github.com/masathayde" },
          { name: "Mateus de Paula", image: "https://github.com/MoustacheGolem.png?size=40", url: "https://github.com/MoustacheGolem" },
          { name: "Rafael Nogalha", image: "https://github.com/rafaelnogalha.png?size=40", url: "https://github.com/rafaelnogalha" },
          { name: "Tong Zhou", image: "https://github.com/Tong00020.png?size=40", url: "https://github.com/Tong00020" },
        ],
      };
    },
  };
</script>

<style scoped>
  #title {
    margin-bottom: 10px;
  }
  
  .devs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 20px auto;
    padding: 10px;
    width: fit-content;
    gap: 12.5px 25px;
    background: linear-gradient(var(--background-color-secondary), var(--background-color-secondary)) center/1px 92% no-repeat;
    z-index: 1;
  }

  #repo:hover {
    color: gold;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 650px) {
  .devs {
    grid-template-columns: repeat(1, 1fr);
    background: none;
  }
}

</style>