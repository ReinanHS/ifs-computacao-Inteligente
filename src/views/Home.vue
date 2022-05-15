<template>
  <main class="scroll-box">
    <section class="scroll-panels">
      <div class="scroll-panels-container" style="width: 200%">
        <article class="panel full-screen">
          <Header></Header>
        </article>
        <article class="panel full-screen">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <img src="" alt="" />
              </div>
              <div class="col-6 d-flex flex-column">
                <h2>Panel 2</h2>

                <p class="step-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Including versions of Lorem Ipsum.
                </p>

                <div class="panels-navigation">
                  <div class="nav-panel" data-sign="minus">
                    <a href="#panel-1" class="anchor">Prev</a>
                  </div>
                  <div class="nav-panel" data-sign="plus">
                    <a href="#panel-3" class="anchor">Next</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  data() {
    return {
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
  components: { Header },
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
