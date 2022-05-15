<template>
  <h1 class="hero-heading">
    <div class="glitch-wrapper">
      <div class="glitch" :data-text="title">
        {{ title }}
      </div>
    </div>
  </h1>
</template>
<script>
export default {
  name: "HeroHeading",
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
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
</style>
