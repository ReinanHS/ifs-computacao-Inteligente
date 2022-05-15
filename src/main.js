import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";

import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    createApp(App)
      .use(router)
      .mixin({
        created: function () {
          this.gsap = gsap;
        },
      })
      .mount("#app");
  },
  false
);
