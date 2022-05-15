import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    createApp(App).use(router).mount("#app");
  },
  false
);
