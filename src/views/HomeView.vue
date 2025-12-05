<template>
  <section id="home">
    <img class="forms l" src="@/assets/images/home_forms_left.png" />
    <img class="forms r" src="@/assets/images/home_forms_right.png" />

    <div class="frame center">
      <img class="desktop" src="@/assets/images/home_frame_center.png" />
      <img class="mobile" src="@/assets/images/home_frame_center_mobile.png" />
      <div class="inside">
        <h1>Este Natal, <br>envia postais <br>e deixa-te <br>de likes!</h1>
        <p>Surpreende o teu amigo <br>com um postal de natal <br>e ajuda-o a ganhar uma <br>freebet.</p>
        <div class="button" @click="start($event)">
          <svg width="248" height="64" viewBox="0 0 248 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 10.2021L10.8867 1.5L236.368 1.49999L245.629 10.208L246.486 53.4658L236.389 62.5L10.9023 62.5L1.5 53.4844L1.5 10.2021Z"
              fill="#810000" fill-opacity="0.8" stroke="#FF0000" stroke-width="3" />
          </svg>
          <p>Cria o teu postal</p>
        </div>
      </div>
    </div>

    <img class="frame l" src="@/assets/images/home_man_1.png" />
    <img class="frame r" src="@/assets/images/home_man_2.png" />

    <!--<div class="board">
      <div class="border"></div>
      <div class="col l">
        <p>Este natal <br />envia postais</p>
        <p class="big">e deixa-te <br />de likes!</p>
      </div>
      <div class="col r">
        <p>Surpreende o teu <br />amigo com um postal <br />de natal.</p>
        <a href="#" ref="bt" @click="start($event)" @mousedown="this.$refs.bt.classList.add('down')"
          @mouseup="this.$refs.bt.classList.remove('down')"
          @mouseleave="this.$refs.bt.classList.remove('down')"><span>Cria o teu postal</span></a>
      </div>
    </div>-->
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
      soundbutton.classList.add('show'); siteaudio.volume = 0.2;
      siteaudio.play();
      this.setStarted(true);
      this.$router.push({ path: 'build' })
    }
  }
}
</script>

<style scoped lang="scss">
#home {
  overflow: hidden;
  display: block;
  transition: opacity .7s ease;
  $anime: all 1s cubic-bezier(.6, 1.43, .57, 1.01);

  .forms {
    position: absolute;
    top: 0;
    height: 100%;
    width: auto;
    pointer-events: none;
    transform: translateX(0) scale(1);
    transition: $anime;

    &.l {
      left: 0;
      transform-origin: left center;

      @media only screen and (max-width: 768px) {
        left: -34%;
      }
    }

    &.r {
      right: 0;
      transform-origin: right center;

      @media only screen and (max-width: 768px) {
        right: -30%;
      }
    }
  }

  .frame {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transition: $anime;

    &.l {
      transform: translate(calc(-150% - 50px), calc(-50% + 120px));
      z-index: 1;
      width: 351px;
      height: 590px;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    &.r {
      transform: translate(calc(50% + 50px), calc(-50% + 120px));
      z-index: 1;
      width: 349px;
      height: 590px;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    &.center {
      top: 50%;
      bottom: 0;
      transform: translate(-50%, -166px);
      width: 369px;
      height: 559px;

      @media only screen and (max-width: 768px) {
        width: 348px;
        height: 614px;
      }

      @media only screen and (max-width: 580px) {
        width: 300px;
        height: 530px;
        transform: translate(-50%, -38px);
        z-index: 100;
        top: auto;
      }

      img {
        &.mobile {
          display: none;
          width: 100%;
        }

        @media only screen and (max-width: 768px) {
          display: none;

          &.mobile {
            display: block;
          }

        }

      }

      .inside {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        text-align: center;

        @media only screen and (max-width: 768px) {
          transform: translate(-50%, calc(-50% + 137px));
        }

        @media only screen and (max-width: 580px) {
          transform: translate(-50%, calc(-50% + 77px));
        }

        h1 {
          color: #fff;
          font-family: 'betclic-back-italic';
          text-shadow: -2px 2px 0px #A0A0A080;
          text-transform: uppercase;
          font-size: 32px;
          line-height: 90%;

          @media only screen and (max-width: 768px) {
            font-size: 22px;
          }
        }

        p {
          font-family: 'betclic-medium';
          line-height: 107%;
          font-size: 20px;
          margin-top: 30px;
          color: #fff;

          @media only screen and (max-width: 768px) {
            font-size: 17px;
            margin-top: 20px;
          }

          @media only screen and (max-width: 580px) {
            margin-top: 5px;
            font-size: 15px;
          }
        }

        .button {
          position: relative;
          margin-top: 40px;
          cursor: pointer;
          pointer-events: all;

          @media only screen and (max-width: 768px) {
            margin-top: 5px;
          }

          svg {

            @media only screen and (max-width: 580px) {
              width: 187px;
            }

            path {
              transition: all .3s;
            }
          }

          &:hover {
            svg {
              path {
                fill-opacity: 1;
              }
            }
          }

          p {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-family: 'betclic-bold-italic';
            text-transform: uppercase;
            font-size: 19px;
            white-space: nowrap;
            margin-top: 0;

            @media only screen and (max-width: 580px) {
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  &.v-enter-from {

    .frame {
      &.center {
        transform: translate(-50%, 200%);
      }


      &.l {
        transform: translate(-50%, 200%);
      }

      &.r {
        transform: translate(-50%, 200%);
      }
    }

    .forms {
      &.l {
        transform: translateX(-100%) scale(1.3);
      }

      &.r {
        transform: translateX(100%) scale(1.3);
      }
    }
  }

  &.v-leave-from {
    .frame.center {
      transform: translate(-50%, calc(-50% + 160px));
    }

    .frame.l {
      transform: translate(calc(-150% - 50px), calc(-50% + 160px));
    }

    .frame.r {
      transform: translate(calc(50% + 50px), calc(-50% + 160px));
    }
  }

  &.v-leave-to {
    .frame.center {
      transform: translate(-50%, 200%);
    }

    .frame.l {
      transform: translate(-50%, 200%);
    }

    .frame.r {
      transform: translate(-50%, 200%);
    }

    .forms.l {
      transform: translateX(-100%) scale(1.3);
      opacity: 0;
    }

    .forms.r {
      transform: translateX(100%) scale(1.3);
      opacity: 0;
    }
  }
}
</style>
