import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import VueKinesis from "vue-kinesis";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueKinesis)
  .mount("#app");
