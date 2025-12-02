<template>
  <section id="home">
    <div class="bg"></div>
    <img class="logo" src="@/assets/images/home_logo.png" />
    <img class="man" src="@/assets/images/home_man.png" />
    <img class="ball ball1" src="@/assets/images/home_ball2.png" />
    <img class="ball ball2" src="@/assets/images/home_ball1.png" />
    <img class="ball ball3" src="@/assets/images/home_ball3.png" />
    <img class="ball ball4" src="@/assets/images/home_ball4.png" />

    <div class="board">
      <div class="border"></div>
      <div class="col l">
        <p>Este natal <br />envia postais</p>
        <p class="big">e deixa-te <br />de likes!</p>
      </div>
      <div class="col r">
        <p>Surpreende o teu <br />amigo com um postal <br />de natal.</p>
        <a href="#" ref="bt" @click="start($event)" @mousedown="this.$refs.bt.classList.add('down')"  @mouseup="this.$refs.bt.classList.remove('down')" @mouseleave="this.$refs.bt.classList.remove('down')"><span>Cria o teu postal</span></a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  created() {
  },

  mounted() {
    document.getElementById('footer').classList.remove('hide');
  },

  methods: {

    ...mapActions(['setStarted']),

    share() {
      window.open(`https://api.whatsapp.com:/send?text=https://postaisjinglebet.betclic.pt/`);
    },
    

    start(e) {
      e.preventDefault();
      const siteaudio = document.getElementById("siteaudio"); 
      const soundbutton = document.getElementById("soundbutton"); 
      soundbutton.classList.add('show');
      siteaudio.volume = 0.2;
      siteaudio.play();
      this.setStarted(true);
      this.$router.push({ path: 'build' })
    }
  }
}
</script>

<style scoped lang="scss">
#home {
  background: #000;
  background-image: url('@/assets/images/home_bg.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: block;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #224040;
    background-image: url('@/assets/images/choose_bg.png');
    background-size: cover;
    background-position: center;
    z-index: 0;
    opacity: 0;
  }

  .man {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    z-index: 2;

    @media only screen and (max-height: 800px) {
      bottom: -150px;
    }

    @media only screen and (max-height: 680px) {
      bottom: -250px;
    }

    @media only screen and (max-width: 1030px) {
      width: 400px;
    }

    @media only screen and (max-width: 980px) {
      width: 300px;
    }

    @media only screen and (max-width: 820px) {
      width: 250px;
    }

    @media only screen and (max-width: 768px) {
      z-index: 1;
      width: 300px;
      bottom: 290px;
    }

    @media only screen and (max-width: 580px) {
      width: 300px;
      bottom: 160px;
    }
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 70px;
    transform: translate(-50%, 0%);
    max-width: 774px;
    width: 90%;

    @media only screen and (max-width: 580px) {
      top: 30px;
    }
  }

  .ball {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: -400px;
    z-index: 3;
    transition: all .3s;

    &.ball1 {
      transform: translateX(calc(-50% - 415px));
      top: -620px;

      @media only screen and (max-width: 768px) {
        transform: translateX(calc(-50% - 127px));
        top: -389px;
        width: 61px;
      }

      @media only screen and (max-width: 580px) {
        transform: translateX(calc(-50% - 67px));
        top: -309px;
        width: 45px;
      }
    }

    &.ball2 {
      transform: translateX(calc(-50% - 570px));
      top: -500px;

      @media only screen and (max-width: 768px) {
        transform: translateX(calc(-50% - 275px));
        top: -190px;
        width: 100px;
      }

      @media only screen and (max-width: 580px) {
        transform: translateX(calc(-50% - 142px));
        top: -153px;
        width: 65px;
      }
    }

    &.ball3 {
      transform: translateX(calc(-50% + 410px));
      top: -630px;

      @media only screen and (max-width: 580px) {
        display: none;
      }
    }

    &.ball4 {
      transform: translateX(calc(-50% + 580px));
      top: -420px;

      @media only screen and (max-width: 768px) {
        transform: translateX(calc(-50% + 290px));
        top: -80px;
        width: 120px;
      }

      @media only screen and (max-width: 580px) {
        transform: translateX(calc(-50% + 160px));
        top: -110px;
        width: 90px;
      }
    }
  }

  .board {
    background: rgb(244, 0, 9);
    background: linear-gradient(180deg, rgba(244, 0, 9, 1) 0%, rgba(142, 0, 5, 1) 100%);
    width: 90%;
    max-width: 1065px;
    min-height: 275px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(-50% + 160px));
    z-index: 1;
    position: relative;

    @media only screen and (max-width: 768px) {
      z-index: 2;
      text-align: center;
      padding: 30px 0 110px;
      min-height: auto;
      top: auto;
      transform: translateX(-50%);
      bottom: 10px;
      position: absolute;
    }

    .border {
      position: absolute;
      left: 10px;
      top: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      z-index: 1;
      border: 1px solid #000;
      opacity: .3;
      pointer-events: none;
    }
  }

  .col {
    position: absolute;

    @media only screen and (max-width: 768px) {
      position: relative;
    }

    &.l {
      top: 50%;
      transform: translateY(-50%);
      left: 55px;

      @media only screen and (max-width: 768px) {
        top: auto;
        transform: none;
        left: auto;
      }

      p {
        color: #fff;
        font-family: 'betclic-condensed-regular';
        text-transform: uppercase;
        font-size: 52px;
        font-weight: 400;
        line-height: 41.08px;

        @media only screen and (max-width: 768px) {
          margin-bottom: 15px;

          br {
            content: '';
            display: none;

            &::after {
              content: ' ';
            }
          }
        }

        @media only screen and (max-width: 580px) {
          font-size: 32px;
          line-height: 100%;
          margin-bottom: 0;
        }

        &.big {
          margin-top: 10px;
          font-family: 'betclic-bold-italic';
          color: #F8CF7D;
          text-shadow: -4px 4px 0px #00000050;
          font-size: 42px;
          font-weight: 750;
          line-height: 36.12px;

          @media only screen and (max-width: 580px) {
            font-size: 26px;
            line-height: 100%;
            margin-top: 0;
          }
        }
      }
    }

    &.r {
      top: 50%;
      transform: translateY(-50%);
      right: 35px;

      @media only screen and (max-width: 768px) {
        top: auto;
        transform: none;
        right: auto;
      }

      p {
        font-family: 'betclic-regular';
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        line-height: 21.6px;

        @media only screen and (max-width: 768px) {
          max-width: 419px;
          margin: auto;
          text-align: center;

          br {
            content: '';
            display: none;

            &::after {
              content: ' ';
            }
          }
        }

        @media only screen and (max-width: 580px) {
          font-size: 14px;
          max-width: 264px;
          margin-top: 15px;
        }
      }

      a {
        width: 244px;
        height: 55px;
        background: #F8CF7D;
        text-transform: uppercase;
        font-family: 'betclic-regular';
        color: #000;
        text-decoration: none;
        font-size: 19.28px;
        font-style: italic;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 27px;
        box-shadow: -4px 4px 0px #000000;

        @media only screen and (max-width: 768px) {
          margin: 15px auto 0 auto;
        }

        &.down {
          box-shadow: none;
          position: relative;
          top: 2px;
        }
      }
    }
  }

  &.v-enter-from {
    .ball {
      &.ball1 {
        top: -860px;
      }

      &.ball2 {
        top: -950px;
      }

      &.ball4 {
        top: -910px;
      }

      &.ball3 {
        top: -850px;
      }
    }

    .man {
      transform: translate(-50%, 100%);
    }

    .board {
      transform: translate(-50%, calc(-50% + 160px)) scale(0);
    }

    .logo {
      transform: translate(-50%, -150%);
    }
  }

  &.v-enter-to {
    .ball {
      &.ball1 {
        top: -620px;
      }

      &.ball2 {
        top: -500px;
      }

      &.ball4 {
        top: -420px;
      }

      &.ball3 {
        top: -630px;
      }
    }

    .man {
      transform: translate(-50%, 0%);
    }

    .board {
      transform: translate(-50%, calc(-50% + 160px)) scale(1);
    }

    .logo {
      transform: translate(-50%, 0%);
    }
  }

  &.v-leave-from {
    .ball {
      &.ball1 {
        top: -620px;
      }

      &.ball2 {
        top: -500px;
      }

      &.ball4 {
        top: -420px;
      }

      &.ball3 {
        top: -630px;
      }
    }

    .man {
      transform: translate(-50%, 0%);
    }

    .board {
      transform: translate(-50%, calc(-50% + 160px)) scale(1);
    }

    .logo {
      transform: translate(-50%, 0%);
    }

    .bg {
      opacity: 0;
    }
  }

  &.v-leave-to {
    .ball {
      &.ball1 {
        top: -860px;
      }

      &.ball2 {
        top: -950px;
      }

      &.ball4 {
        top: -910px;
      }

      &.ball3 {
        top: -850px;
      }
    }

    .man {
      transform: translate(-50%, 1000%);
    }

    .board {
      transform: translate(-50%, calc(-50% + 160px)) scale(0);
    }

    .logo {
      transform: translate(-50%, -150%);
    }

    .bg {
      opacity: 1;
    }
  }

  &.v-enter-active {
    transition: all 2s;

    @media only screen and (max-width: 580px) {
      transition: all 0s;
    }

    .ball {
      transition: all 500ms cubic-bezier(0.365, 1.650, 0.575, 0.830);
      transition-timing-function: cubic-bezier(0.365, 1.650, 0.575, 0.830);

      &.ball2 {
        transition-delay: 200ms;
      }

      &.ball4 {
        transition-delay: 300ms;
      }

      &.ball3 {
        transition-delay: 400ms;
      }
    }

    .man {
      transition: all 300ms ease-out;
    }

    .board {
      transition: all 300ms ease-out;
    }

    .logo {
      transition: all 500ms cubic-bezier(0.365, 1.650, 0.575, 0.830);
      transition-timing-function: cubic-bezier(0.365, 1.650, 0.575, 0.830);
    }
  }

  &.v-leave-active {
    transition: all .7s;

    @media only screen and (max-width: 580px) {
      transition: all 0s;
    }

    .ball {
      transition: all 500ms cubic-bezier(0.365, 1.650, 0.575, 0.830);
      transition-timing-function: cubic-bezier(0.365, 1.650, 0.575, 0.830);

      &.ball2 {
        transition-delay: 200ms;
      }

      &.ball4 {
        transition-delay: 300ms;
      }

      &.ball3 {
        transition-delay: 400ms;
      }
    }

    .man {
      transition: all 500ms ease-in;
    }

    .board {
      transition: all 250ms ease-in;
    }

    .logo {
      transition: all 500ms cubic-bezier(0.365, 1.650, 0.575, 0.830);
      transition-timing-function: cubic-bezier(0.365, 1.650, 0.575, 0.830);
    }

    .bg {
      transition: all 250ms ease-in;
    }

  }
}
</style>
