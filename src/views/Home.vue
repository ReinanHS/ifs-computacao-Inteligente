<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: { Header },
  data() {
    return {
      pageConfig: {
        backgroundImage: `url(${require('@/assets/media/garoto-bg-video.jpg')})`,
      }
    }
  },
};
</script>