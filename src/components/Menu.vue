<template>
  <div>
    <nav id="navbar">
      <div class="navbar-left">
        <button id="navbar-btn" class="navbar-button" @click="openMenu()">
          <div id="nav-icon3" :class="isOpen ? 'open' : ''">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div class="navbar-right"></div>
    </nav>

    <div class="menu" v-show="isOpen">
      <Transition>
        <ul class="menu-items" v-show="isOpen">
          <li class="menu-item-wrapper" v-for="(item, i) in itens" :key="i">
            <i class="fas fa-asterisk"></i
            ><a class="menu-item">{{ item.title }}</a>
          </li>
        </ul>
      </Transition>
      <div class="menu-bc" :style="getAnimation()"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      firstClick: true,
      isOpen: false,
      itens: [
        {
          title: "Introdução",
        },
        {
          title: "Algoritmo guloso",
        },
        {
          title: "Exemplos",
        },
        {
          title: "Sobre",
        },
      ],
    };
  },
  methods: {
    openMenu() {
      this.firstClick = false;
      this.isOpen = !this.isOpen;
    },
    getAnimation() {
      if (this.firstClick) {
        return "";
      }

      return this.isOpen
        ? "animation: 0.35s ease-in-out 0s 1 normal forwards running menu"
        : "animation: menu2 .35s ease-in-out forwards";
    },
  },
};
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

nav {
  top: 0;
  max-height: 15vh;
  position: absolute;
  z-index: 130;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-left {
    width: 10vw;
    display: inline-block;

    .navbar-button {
      position: fixed;
      top: 0;
      margin: 0;
      width: 10%;
      height: 15vh;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0b1c2a;
      border-bottom-right-radius: 25px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      @media screen and (max-width: 1000px) {
        & {
          width: 100px;
        }
      }

      &:hover {
        border-bottom-right-radius: 50px;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .navbar-right {
    height: 15vh;
    width: calc(100% - 10vw);
    display: inline-block;
  }
  #nav-icon3 {
    width: 30px;
    height: 30px;
    position: relative;
    display: block;
    margin: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 135;

    .open {
      span:nth-child(1) {
        top: 18px;
        width: 0;
        left: 50%;
      }
      span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        top: 18px;
        width: 0;
        left: 50%;
      }
    }

    span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: #fff;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 10px;
      }
      &:nth-child(4) {
        top: 20px;
      }
    }
  }
}
.menu {
  top: 0;
  position: fixed;
  overflow: hidden;
  width: 30%;
  height: 100%;
  z-index: 125;

  @media screen and (max-width: 1180px) {
    & {
      width: 50%;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      width: 80%;
    }
  }

  .menu-bc {
    position: absolute;
    background-color: #0b1c2a;
    border-radius: 50%;
    width: 0;
    height: 0;
  }

  .menu-items {
    position: relative;
    list-style-type: none;
    margin: 18vh 3em 0 3em;
    z-index: 275;

    @media screen and (max-width: 480px) {
      & {
        margin: 18vh 1em 0 0.5em;
      }
    }

    .menu-item-wrapper {
      padding: 0;
      margin: 1em;
      color: #fff;
      font-size: 150%;
      cursor: pointer;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #b3b3b3;
      }
      i {
        margin: 0 0.75em 0 0;
      }
    }
  }
}
</style>
