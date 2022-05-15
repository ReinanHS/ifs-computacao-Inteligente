<template>
  <main class="scroll-box">
    <section class="scroll-panels">
      <div class="scroll-panels-container" style="width: 200%">
        <article class="panel full-screen">
          <video-slide
            :videoLink="slides[0].videoLink"
            :backgroundImage="slides[0].backgroundImage"
            :subtitle="slides[0].subtitle"
          >
            <hero-heading title="Computação Inteligente" />
          </video-slide>
        </article>
        <article class="panel full-screen">
          <summary-slide></summary-slide>
        </article>
      </div>
    </section>
  </main>
</template>
<script>
import SummarySlide from "../components/slides/SummarySlide.vue";
import VideoSlide from "../components/slides/VideoSlide.vue";
import HeroHeading from "../components/texts/HeroHeading.vue";
import slides from "../data/slides";
export default {
  name: "Home",
  components: { VideoSlide, HeroHeading, SummarySlide },
  data() {
    return {
      slides: slides,
      panels: [],
      panelActiveIndex: 0,
    };
  },
  mounted() {
    this.panels = this.gsap.utils.toArray(".scroll-panels-container .panel");
    window.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        this.updateScreen(1);
        return;
      }
      this.updateScreen(-1);
    });
  },
  created() {
    document.querySelector("body").style = "overflow-x: hidden;";
  },
  methods: {
    updateScreen(operator) {
      this.panelActiveIndex += operator;
      if (this.panelActiveIndex < 0) {
        this.panelActiveIndex = 0;
      }
      if (this.panelActiveIndex >= this.panels.length) {
        this.panelActiveIndex = this.panels.length - 1;
      }
      let targetElem = this.panels[this.panelActiveIndex];
      this.gsap.to(window, {
        scrollTo: targetElem,
        duration: 1,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.scroll-panels {
  .scroll-panels-container {
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    overflow: hidden;

    .panel {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      display: flex;
    }

    .full-screen {
      display: block;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
  }
}
</style>
