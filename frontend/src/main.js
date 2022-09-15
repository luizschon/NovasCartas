import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import VueKinesis from "vue-kinesis";

createApp(App)
  .use(router)
  .use(VueKinesis)
  .mount("#app");
