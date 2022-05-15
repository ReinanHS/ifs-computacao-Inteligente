<template>
  <header>
    <div class="header-left">
      <div class="header-row">
        <div class="header-row-center">
          <h3 class="header-row-title">{{ header.subtitle }}</h3>
        </div>
        <div class="header-row-bottom">
          <button class="button-down">
            <i class="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div class="header-video-wrapper" :style="wrapper">
        <video :src="videoLink" loop muted autoplay></video>
        <div class="header-img-overlay"></div>
        <div class="header-title-wrapper">
          <h1 class="hero-heading">
            <div class="glitch-wrapper">
              <div class="glitch" :data-text="header.title">
                {{ header.title }}
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      wrapper: {
        backgroundImage: `url(${require("@/assets/media/garoto-bg-video.jpg")})`,
      },
      videoLink:
        "https://firebasestorage.googleapis.com/v0/b/quickstart-1566913824070.appspot.com/o/pexels-ron-lach-9783954.mp4?alt=media&token=a528dd62-5c67-4b19-98a7-fa6cddf83404",
      header: {
        title: "Computação Inteligente",
        subtitle: "Documentação",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
header {
  position: relative;
  height: 100vh;

  .header-left {
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

    .header-row {
      width: 10vw;
      height: 100%;
      display: inline-block;

      .header-row-center {
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        .header-row-title {
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

      .header-row-bottom {
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

  .header-right {
    position: relative;
    height: 100%;
    width: 100%;

    .header-video-wrapper {
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

      .header-title-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        z-index: 3;

        .hero-heading {
          color: #fff;
          font-family: "Orbitron", sans-serif;
          font-size: 52px;
          text-transform: uppercase;
          padding-left: 100px;
          text-align: center;

          @media screen and (max-width: 1000px) {
            & {
              padding-left: initial;
            }
          }

          .glitch-wrapper {
            height: 100%;
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
          }

          .glitch {
            color: white;
            font-size: 86px;
            text-transform: upercase;
            position: relative;
            display: inline-block;

            @media screen and (max-width: 1400px) {
              & {
                font-size: 62px;
              }
            }

            @media screen and (max-width: 1000px) {
              & {
                font-size: 42px;
              }
            }
          }

          .glitch::before,
          .glitch::after {
            animation-delay: 5s;
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
          }

          .glitch::before {
            left: 2px;
            text-shadow: -2px 0 #49fc00;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim-2 4s infinite linear alternate-reverse;
          }

          .glitch::after {
            left: -2px;
            text-shadow: -2px 0 #b300fc;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim 3.5s infinite linear alternate-reverse;
          }
        }
      }

      .header-img-overlay {
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
