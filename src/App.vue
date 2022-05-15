<template>
  <github-corner></github-corner>
  <menu-vue></menu-vue>
  <router-view />
  <div class="cursor" ref="cursor"></div>
</template>
<script>
import GithubCorner from "./components/GithubCorner.vue";
import MenuVue from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    MenuVue,
    GithubCorner,
  },
  mounted() {
    document.addEventListener("mousemove", (e) => {
      this.$refs.cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("click", () => {
      this.$refs.cursor.classList.add("expand");

      setTimeout(() => {
        this.$refs.cursor.classList.remove("expand");
      }, 500);
    });
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.cursor {
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  animation: cursorAnim 0.5s infinite alternate;
  pointer-events: none;
  z-index: 30;
}

.cursor::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  border: 8px solid gray;
  border-radius: 50%;
  opacity: 0.5;
  top: -8px;
  left: -8px;
  animation: cursorAnim2 0.5s infinite alternate;
}

.expand {
  animation: cursorAnim3 0.5s forwards;
  border: 1px solid red;
}
</style>
