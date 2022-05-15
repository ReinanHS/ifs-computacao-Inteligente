<template>
  <section>
    <div class="section-left" v-if="subtitle">
      <div class="section-row">
        <div class="section-row-center">
          <h3 class="section-row-title">{{ subtitle }}</h3>
        </div>
        <div class="section-row-bottom">
          <button class="button-down">
            <i class="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="section-right">
      <div class="section-video-wrapper" :style="`url(${backgroundImage})`">
        <video :src="videoLink" loop muted autoplay v-if="videoLink"></video>
        <div class="section-img-overlay"></div>
        <div class="section-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Header",
  props: {
    subtitle: String,
    videoLink: String,
    backgroundImage: String,
  },
};
</script>
<style lang="scss" scoped>
section {
  position: relative;
  height: 100vh;

  .section-left {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    z-index: 50;

    @media screen and (max-width: 1000px) {
      & {
        display: none;
      }
    }

    .section-row {
      width: 10vw;
      height: 100%;
      display: inline-block;

      .section-row-center {
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        .section-row-title {
          margin: 10vh 0 0 0;
          color: #ffffff;
          font-size: 95%;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.5em;
          font-weight: 300;
          text-transform: uppercase;
        }
      }

      .section-row-bottom {
        height: 30%;

        .button-down {
          width: 100%;
          height: 100%;
          color: var(--white);
          background-image: linear-gradient(to top, #1e1e1e, transparent);
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  .section-right {
    position: relative;
    height: 100%;
    width: 100%;

    .section-video-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-size: cover;
      background-position: center;

      video {
        min-width: 100%;
        min-height: 100vh;
        z-index: 1;

        @media screen and (max-width: 1400px) {
          & {
            display: none;
          }
        }
      }

      .section-content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        z-index: 3;
      }

      .section-img-overlay {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0.7) 50%
        );
        background-size: 3px 3px;
        z-index: 2;
      }
    }
  }
}
</style>
