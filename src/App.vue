<template>
  <github-corner></github-corner>
  <MenuVue></MenuVue>
  <router-view />
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
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
