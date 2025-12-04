<script setup>
import audio from '@/assets/audio/audio.mp3'
</script>

<template>
  <div id="app" :class="routeClass">

    <img class="frame t" :class="{ 'frame-top-moving': frameTopMoving }" src="@/assets/images/frame_top.png" />
    <img class="frame l" :class="{ 'frame-left-moving': frameLeftMoving }" src="@/assets/images/frame_left.png" />
    <img class="frame r" :class="{ 'frame-right-moving': frameRightMoving }" src="@/assets/images/frame_right.png" />
    <img class="frame b" :class="{ 'frame-bottom-moving': frameBottomMoving }" src="@/assets/images/frame_bottom.png" />


    <Transition name="bg" appear>
      <div class="bg"></div>
    </Transition>

    <Transition name="logo" appear>
      <img @click="$router.push({ path: '/' })" class="logo" src="@/assets/images/home_logo.png" alt="Logo" />
    </Transition>


    <div id="soundbutton">
      <div :class="sound ? 'sound on' : 'sound off'" @click="toggleAudio()">
        <svg class="on" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.1226 0.00202518C11.8523 0.00827326 11.582 0.0879347 11.3405 0.251948L6.56762 3.50407C5.89264 3.96485 5.09125 4.21321 4.26751 4.21321H3.25181C1.46355 4.21321 -0.00159565 5.64557 1.30423e-06 7.39191V12.6091C1.30423e-06 14.3554 1.46514 15.7878 3.25181 15.7878H4.26751C5.09125 15.7878 5.89264 16.033 6.56762 16.4938L11.3405 19.7491C12.3098 20.4098 13.7349 19.6835 13.7349 18.5291V1.46717C13.7349 0.890791 13.3783 0.422176 12.9 0.18005C12.6617 0.0582119 12.3929 -0.00582868 12.1226 0.000417399V0.00202518ZM18.02 2.24195C17.8041 2.24195 17.5961 2.3263 17.4426 2.47469C17.1243 2.78709 17.1243 3.2932 17.4426 3.60558C19.1781 5.30194 20.1506 7.60123 20.1506 10.0004C20.1506 12.3903 19.1828 14.6834 17.4586 16.378C17.1387 16.6905 17.1403 17.1966 17.4618 17.5089C17.7817 17.8198 18.2999 17.8182 18.6182 17.5058C20.648 15.5111 21.7885 12.8121 21.7885 10.0001C21.7885 7.17911 20.6416 4.47223 18.599 2.47604L18.6006 2.47448C18.4471 2.32453 18.2376 2.24038 18.02 2.24195ZM15.8591 6.47185C15.7151 6.47966 15.576 6.52652 15.4576 6.60462C15.2769 6.72177 15.1521 6.90609 15.1089 7.11382C15.0673 7.32157 15.1121 7.53713 15.2337 7.71363C15.6959 8.38999 15.9407 9.18506 15.9407 9.99885C15.9407 10.8126 15.696 11.6077 15.2337 12.2825V12.2841C15.1121 12.459 15.0673 12.6761 15.1089 12.8839C15.1521 13.0916 15.2769 13.276 15.4576 13.3931C15.6384 13.5118 15.8591 13.554 16.0718 13.5134C16.2846 13.4712 16.4733 13.3494 16.5933 13.1728C17.2363 12.2341 17.5785 11.1297 17.5785 10.0004C17.5785 8.87105 17.2362 7.76671 16.5933 6.82636C16.4317 6.58737 16.1502 6.4531 15.8591 6.47185Z"
            fill="white" />
        </svg>

        <svg class="off" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.1226 0.00202518C11.8523 0.00827326 11.582 0.0879347 11.3405 0.251948L6.56762 3.50407C5.89264 3.96485 5.09125 4.21321 4.26751 4.21321H3.25181C1.46355 4.21321 -0.00159565 5.64557 1.30423e-06 7.39191V12.6091C1.30423e-06 14.3554 1.46514 15.7878 3.25181 15.7878H4.26751C5.09125 15.7878 5.89264 16.033 6.56762 16.4938L11.3405 19.7491C12.3098 20.4098 13.7349 19.6835 13.7349 18.5291V1.46717C13.7349 0.890791 13.3783 0.422176 12.9 0.18005C12.6617 0.0582119 12.3929 -0.00582868 12.1226 0.000417399V0.00202518Z"
            fill="white" />
          <path
            d="M15.7574 7.17152C15.3669 6.781 15.3669 6.14783 15.7574 5.75731C16.1479 5.36679 16.7811 5.36679 17.1716 5.75731L24.2427 12.8284C24.6332 13.2189 24.6332 13.8521 24.2427 14.2426C23.8522 14.6331 23.219 14.6331 22.8285 14.2426L15.7574 7.17152Z"
            fill="white" />
          <path
            d="M22.7782 5.70711C23.1688 5.31658 23.8019 5.31658 24.1925 5.70711C24.583 6.09763 24.583 6.7308 24.1925 7.12132L17.1214 14.1924C16.7309 14.5829 16.0977 14.5829 15.7072 14.1924C15.3167 13.8019 15.3167 13.1687 15.7072 12.7782L22.7782 5.70711Z"
            fill="white" />
        </svg>

      </div>
    </div>


    <audio id="siteaudio" loop>
      <source :src="audio" type="audio/mpeg">
    </audio>

    <RouterView v-slot="{ Component, route }">
      <Transition name="v" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>


    <TheFooter />
  </div>
</template>

<script>

import { provide } from "vue"
import TheFooter from './components/TheFooter.vue'

export default {

  components: { TheFooter },

  data() {
    return {
      sound: true,
      frameTopMoving: false,
      frameLeftMoving: false,
      frameRightMoving: false,
      frameBottomMoving: false
    }
  },

  provide() {
    return {
      animateFrames: this.animateFrames
    }
  },

  computed: {
    routeClass() {
      // gera "route-home", "route-build", etc.
      return `route-${this.$route.name || 'default'}`
    }
  },

  created() {
  },

  mounted() {
    this.animateFrames();

    if (this.$route.name == 'share') {
      this.sound = false;
    }
  },

  methods: {

    animateFrames() {
      const duration = 800

      // reset rápido para reiniciar animação
      this.frameTopMoving = false
      this.frameLeftMoving = false
      this.frameRightMoving = false
      this.frameBottomMoving = false

      this.$nextTick(() => {
        this.frameTopMoving = true
        this.frameLeftMoving = true
        this.frameRightMoving = true
        this.frameBottomMoving = true

        // remover novamente depois da animação
        setTimeout(() => {
          this.frameTopMoving = false
          this.frameLeftMoving = false
          this.frameRightMoving = false
          this.frameBottomMoving = false
        }, duration)
      })
    },

    toggleAudio() {
      const siteaudio = document.getElementById("siteaudio");
      let volume;
      let muted;

      if (this.$route.name == 'share') {
        siteaudio.play();
      }

      if (this.sound) {
        volume = 0;
        muted = true;
        this.sound = false;
      } else {
        volume = 0.2;
        muted = false;
        this.sound = true;
      }

      siteaudio.volume = volume;
      siteaudio.muted = muted;
    }
  },

  watch: {
    $route() {
      this.animateFrames()
    }
  },
}
</script>

<style lang="scss">
body,
html {
  height: 100dvh;
  min-height: 900px;
  scroll-behavior: smooth;

  @media only screen and (max-width: 768px) {
    min-height: auto;
  }
}

#app {
  width: 100%;
  height: 100dvh;
  min-height: 900px;
  position: relative;
  overflow: hidden;
  $anime: all 1s cubic-bezier(.6, 1.43, .57, 1.01);

  @media only screen and (max-width: 768px) {
    min-height: auto;
  }

  #soundbutton {
    position: absolute;
    left: 40px;
    top: 40px;
    z-index: 10000;
    display: none;

    @media only screen and (max-width: 580px) {
      left: 10px;
      top: 10px;
      transform: scale(0.7);
      transform-origin: top left;
    }

    &.show {
      display: flex;
    }

    .sound {
      border: 1px solid #fff;
      width: 37px;
      height: 37px;
      border-radius: 50%;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {

        &.off {
          display: none;

          path {
            fill: #8E0005;
          }
        }
      }

      &:hover {
        background: #fff;

        svg {

          &.off {
            display: none;
          }

          path {
            fill: #8E0005;
          }
        }
      }

      &.off {
        background: #fff;

        svg {

          &.on {
            display: none;
          }

          &.off {
            display: block;
          }

          path {
            fill: #8E0005;
          }
        }
      }
    }
  }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #224040;
    background-image: url('@/assets/images/home_bg.jpg');
    background-size: cover;
    background-position: center;
    z-index: 0;
    pointer-events: none;
    transform: scale(1.1);
    transition: $anime;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 70px;
    transform: translate(-50%, 0%);
    max-width: 774px;
    width: 90%;
    transition: $anime;
    z-index: 10;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      max-width: 300px;
    }

    @media only screen and (max-width: 580px) {
      top: 30px;
    }
  }

  &.route-home .logo {
    pointer-events: none;
  }

  &.route-choose .logo {
    top: 60px;
    transform: translate(-50%, -40px) scale(0.5);
  }

  &.route-finish .logo {
    top: 60px;
    transform: translate(-50%, -40px) scale(0);
  }

  &.route-share .logo {
    display: none;
  }

  .logo-enter-from {
    transform: translate(-50%, 600px) scale(0.8); // começa cá em baixo
  }

  .bg-enter-from {
    transform: scale(2);
  }


  .frame {
    position: absolute;
    pointer-events: none;
    z-index: 1000;

    &.t {
      top: 0;
      left: 90px;

      @media only screen and (max-width: 580px) {
        height: 8px;
      }
    }

    &.l {
      left: 0;
      bottom: 100px;

      @media only screen and (max-width: 580px) {
        width: 8px;
      }
    }

    &.r {
      right: 0;
      top: 160px;

      @media only screen and (max-width: 580px) {
        width: 8px;
      }
    }

    &.b {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (max-width: 580px) {
        height: 8px;
      }
    }
  }

  .frame.t.frame-top-moving {
    animation: frameTopSlide 0.8s ease-in-out;
  }

  @keyframes frameTopSlide {
    0% {
      transform: translateX(0);
    }

    40% {
      transform: translateX(120vw);
    }

    41% {
      transform: translateX(-120vw);
    }

    100% {
      transform: translateX(0);
    }
  }

  .frame.b.frame-bottom-moving {
    animation: frameBottomSlide 0.8s ease-in-out;
  }

  @keyframes frameBottomSlide {
    0% {
      transform: translateX(0);
    }

    40% {
      transform: translateX(-120vw);
    }

    41% {
      transform: translateX(120vw);
    }

    100% {
      transform: translateX(0);
    }
  }

  .frame.l.frame-left-moving {
    animation: frameLeftSlide 0.8s ease-in-out;
  }

  @keyframes frameLeftSlide {
    0% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-120vh);
    }

    41% {
      transform: translateY(120vh);
    }

    100% {
      transform: translateY(0);
    }
  }

  .frame.r.frame-right-moving {
    animation: frameRightSlide 0.8s ease-in-out;
  }

  @keyframes frameRightSlide {
    0% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(120vh);
    }

    41% {
      transform: translateY(-120vh);
    }

    100% {
      transform: translateY(0);
    }
  }




  section {
    height: 100%;
    width: 100%;
  }
}
</style>
