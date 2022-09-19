<template>
  <div class="dev-container">
    <kinesis-container>
      <kinesis-element :strength="15">
        <a :href=url target="_blank">
          <div class="dev">
            <img :src=image alt="Github profile image" />
            {{ name }}
          </div>
        </a>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
  import { KinesisContainer, KinesisElement } from "vue-kinesis";

  export default {
    name: "Dev",
    props: {
      name: String,
      image: String,
      url: String,
    },
    components: {
      KinesisContainer,
      KinesisElement,
    },
  }
</script>

<style scoped>
.dev-container {
  border-radius: 10px;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: fit-content;
  transition: all;
  transition-duration: 0.2s;
}

.dev-container:hover {
  background-color: var(--background-color-tertiary);
  transition: all;
  transition-duration: 0.3s;
}

.dev {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--background-color-secondary);
  border-radius: 10px;
  padding: 0.5rem 5rem 0.5rem 0.5rem;
  font-size: 1.2rem;
}

.dev > img {
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--font-color-primary);
}

a {
  text-decoration: none;
  color: var(--font-color-primary);
}

</style>