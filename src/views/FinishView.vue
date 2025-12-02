<template>
  <section id="finish">

    <div class="popup" ref="popup">
      <div class="center">
        <h2>O vídeo está a carregar...</h2>
        <p>Por favor, aguarda um momento.</p>
        <div class="loader"></div>
        <div class="info">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.48945 2.48945C-0.829815 5.80871 -0.829815 11.1913 2.48945 14.5106C5.80871 17.8298 11.1913 17.8298 14.5106 14.5106C17.8298 11.1913 17.8298 5.80871 14.5106 2.48945C11.1913 -0.829815 5.80871 -0.829815 2.48945 2.48945ZM8.8409 3.56596C9.55858 3.56596 10.1327 4.15805 10.1327 4.87573C10.1327 5.5934 9.54063 6.18549 8.8409 6.18549C8.12322 6.18549 7.53113 5.5934 7.53113 4.85778C7.53113 4.14011 8.12322 3.56596 8.8409 3.56596ZM10.6889 12.3396C10.653 12.4472 10.5813 12.5728 10.5095 12.6446C10.043 13.129 9.46887 13.4161 8.78707 13.4161C8.46412 13.4161 8.1591 13.4161 7.83615 13.3623C7.31583 13.2905 6.65198 12.6446 6.74169 11.9628C6.81346 11.4963 6.88522 11.0298 6.95699 10.5633C7.10053 9.75594 7.24406 8.93061 7.3876 8.12322C7.3876 8.06939 7.40554 8.01557 7.40554 7.96174C7.40554 7.62084 7.29789 7.49525 6.95699 7.45937C6.81346 7.44143 6.66992 7.42348 6.52639 7.3876C6.36491 7.33377 6.2752 7.19024 6.29314 7.06464C6.31108 6.92111 6.40079 6.8314 6.58021 6.79551C6.66992 6.77757 6.77757 6.77757 6.88522 6.77757C7.27995 6.77757 7.67467 6.77757 8.08734 6.77757C8.51794 6.77757 8.93061 6.77757 9.36121 6.77757C9.66623 6.77757 9.84565 6.92111 9.84565 7.22612C9.84565 7.47731 9.80976 7.7285 9.75594 7.97968C9.59446 8.91267 9.41504 9.8277 9.25356 10.7607C9.19974 11.0657 9.12797 11.3707 9.09208 11.6757C9.07414 11.8193 9.09208 11.9807 9.12797 12.1243C9.18179 12.3216 9.32533 12.4293 9.52269 12.4113C9.68417 12.3934 9.84565 12.3396 10.0071 12.2678C10.1327 12.214 10.2404 12.1243 10.366 12.0884C10.5813 12.0166 10.7427 12.1422 10.6889 12.3396Z"
              fill="#EF010A" />
          </svg>
          <p>O vídeo será aberto numa nova janela.<br />Verifica se o seu nrowser bloqueou o popup.</p>
        </div>
      </div>
    </div>

    <div class="col l" ref="coll">
      <div class="center">
        <img class="logo" src="@/assets/images/home_logo.png" @click="$router.push({ path: '/' })" />
        <p>partilha com os teus amigos<br />o teu postal</p>

        <div class="social">
          <a href="#" target="_blank" @click="downloadVideo($event)">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.88901 0.0498047H14.574C17.3639 0.0498047 19.6588 2.25817 19.6588 4.94295V13.257C19.6588 15.9418 17.3639 18.1502 14.574 18.1502H5.88901C3.09908 18.1502 0.80423 15.9418 0.80423 13.257V4.94295C0.80423 2.25817 3.09908 0.0498047 5.88901 0.0498047ZM15.2936 3.21102C15.8787 3.21102 16.3737 3.68744 16.3737 4.25043C16.3737 4.81342 15.8787 5.28985 15.2936 5.28985C14.6639 5.28985 14.2135 4.81342 14.2135 4.25043C14.2135 3.68744 14.6633 3.21102 15.2936 3.21102ZM10.2088 4.16387H10.2542C13.0441 4.16387 15.3842 6.41583 15.3842 9.10061C15.3842 11.8284 13.0441 14.0374 10.2542 14.0374H10.2088C7.41891 14.0374 5.12406 11.829 5.12406 9.10061C5.12406 6.41583 7.41891 4.16387 10.2088 4.16387ZM10.2088 5.85284H10.2542C12.0992 5.85284 13.6291 7.32508 13.6291 9.10061C13.6291 10.9191 12.0992 12.3914 10.2542 12.3914H10.2088C8.36377 12.3914 6.83387 10.9191 6.83387 9.10061C6.83387 7.32508 8.36377 5.85284 10.2088 5.85284ZM5.93432 1.60924H14.5287C16.4637 1.60924 18.0382 3.12508 18.0382 4.98655V13.214C18.0382 15.0761 16.463 16.5914 14.5287 16.5914H5.93432C3.99929 16.5914 2.42474 15.0755 2.42474 13.214V4.98655C2.42474 3.12445 3.99995 1.60924 5.93432 1.60924Z"
                fill="white" />
            </svg>
          </a>
          <a :href="'https://www.facebook.com/sharer.php?u=' + shareUrl" @click="share($event, 'facebook')">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.26446 5.94891V4.43373C6.26446 3.70809 6.72567 3.53315 7.05224 3.53315H9.04459V0.295898H6.29454C3.24656 0.295898 2.56191 2.69645 2.56191 4.24358V5.94891H0.792999V9.72317H2.57767V19.1504H6.13126V9.72317H8.76243L8.88131 8.23841L9.08899 5.94891H6.26446Z"
                fill="white" />
            </svg>
          </a>
          <a target="_blank" :href="'https://twitter.com/share?url=' + shareUrl + '&text=' + shareText"
            @click="share($event, 'twitter')">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3001 7.71013L17.7576 0.0498047H16.2274L10.6203 6.70116L6.14197 0.0498047H0.976746L7.74887 10.1078L0.976746 18.1409H2.50705L8.42824 11.1168L13.1577 18.1409H18.3229L11.2997 7.71013H11.3001ZM9.20411 10.1964L8.51795 9.19489L3.05845 1.22543H5.40891L9.81479 7.65704L10.501 8.6586L16.2281 17.0187H13.8776L9.20411 10.1968V10.1964Z"
                fill="white" />
            </svg>
          </a>

          <a target="_blank" :href="'https://twitter.com/share?url=' + shareUrl + '&text=' + shareText"
            @click="share($event, 'whatsapp')">
            <svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
              xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path
                d="M373.295,307.064c-6.37,-3.188 -37.687,-18.596 -43.526,-20.724c-5.838,-2.126 -10.084,-3.187 -14.331,3.188c-4.246,6.376 -16.454,20.725 -20.17,24.976c-3.715,4.251 -7.431,4.785 -13.8,1.594c-6.37,-3.187 -26.895,-9.913 -51.225,-31.616c-18.935,-16.89 -31.72,-37.749 -35.435,-44.126c-3.716,-6.377 -0.397,-9.824 2.792,-13c2.867,-2.854 6.371,-7.44 9.555,-11.16c3.186,-3.718 4.247,-6.377 6.37,-10.626c2.123,-4.252 1.062,-7.971 -0.532,-11.159c-1.591,-3.188 -14.33,-34.542 -19.638,-47.298c-5.171,-12.419 -10.422,-10.737 -14.332,-10.934c-3.711,-0.184 -7.963,-0.223 -12.208,-0.223c-4.246,0 -11.148,1.594 -16.987,7.969c-5.838,6.377 -22.293,21.789 -22.293,53.14c0,31.355 22.824,61.642 26.009,65.894c3.185,4.252 44.916,68.59 108.816,96.181c15.196,6.564 27.062,10.483 36.312,13.418c15.259,4.849 29.145,4.165 40.121,2.524c12.238,-1.827 37.686,-15.408 42.995,-30.286c5.307,-14.882 5.307,-27.635 3.715,-30.292c-1.592,-2.657 -5.838,-4.251 -12.208,-7.44m-116.224,158.693l-0.086,0c-38.022,-0.015 -75.313,-10.23 -107.845,-29.535l-7.738,-4.592l-80.194,21.037l21.405,-78.19l-5.037,-8.017c-21.211,-33.735 -32.414,-72.726 -32.397,-112.763c0.047,-116.825 95.1,-211.87 211.976,-211.87c56.595,0.019 109.795,22.088 149.801,62.139c40.005,40.05 62.023,93.286 62.001,149.902c-0.048,116.834 -95.1,211.889 -211.886,211.889m180.332,-392.224c-48.131,-48.186 -112.138,-74.735 -180.335,-74.763c-140.514,0 -254.875,114.354 -254.932,254.911c-0.018,44.932 11.72,88.786 34.03,127.448l-36.166,132.102l135.141,-35.45c37.236,20.31 79.159,31.015 121.826,31.029l0.105,0c140.499,0 254.87,-114.366 254.928,-254.925c0.026,-68.117 -26.467,-132.166 -74.597,-180.352"
                id="WhatsApp-Logo" fill="white" />
            </svg>
          </a>
        </div>

        <a href="#" class="copy bt" ref="bt2" @mousedown="this.$refs.bt2.classList.add('down')"
          @mouseup="this.$refs.bt2.classList.remove('down')" @mouseleave="this.$refs.bt2.classList.remove('down')"
          @click="onClickCopyCode($event)">Copiar link</a>
        <div class="bottom">
          <p>Queres enviar um novo postal?<br /><a href="#" @click="back()">Clica aqui</a></p>
        </div>
      </div>
    </div>
    <div class="col r" ref="colr">
      <div class="center">
        <div class="repeat" ref="repeat">
          <img @click="playVideo()" src="@/assets/images/repeat.svg" />
          <div class="shadow"></div>
        </div>

        <video ref="video" @timeupdate="ontimeupdate()" width="405" height="720" autoplay playsinline muted>
          <source :src="videos[AppMessage.pid - 1]" type="video/mp4">
        </video>
        <div class="message">
          <div ref="title" class="title field">{{ AppMessage.title }}</div>
          <div ref="msg" class="mensagem field">{{ AppMessage.msg }}</div>
          <div ref="rem" class="remetente field">{{ AppMessage.rem }}</div>
        </div>
      </div>
    </div>
    <div class="nav" ref="nav">
      <p>partilha com os teus<br />amigos o teu postal</p>
      <a href="#" @click="switcherino($event)">Clica aqui</a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import postal1 from '@/assets/videos/postal1.mp4';
import postal2 from '@/assets/videos/postal2.mp4';
import postal3 from '@/assets/videos/postal3.mp4';
import postal4 from '@/assets/videos/postal4.mp4';
import postal5 from '@/assets/videos/postal5.mp4';
import postal6 from '@/assets/videos/postal6.mp4';
import postal7 from '@/assets/videos/postal7.mp4';
import postal8 from '@/assets/videos/postal8.mp4';
import postal9 from '@/assets/videos/postal9.mp4';
import postal10 from '@/assets/videos/postal10.mp4';
import postal11 from '@/assets/videos/postal11.mp4';
import postal12 from '@/assets/videos/postal12.mp4';
import postal13 from '@/assets/videos/postal13.mp4';
import postal14 from '@/assets/videos/postal14.mp4';
import postal15 from '@/assets/videos/postal15.mp4';
import postal16 from '@/assets/videos/postal16.mp4';
import postal17 from '@/assets/videos/postal17.mp4';
import postal18 from '@/assets/videos/postal18.mp4';
import postal19 from '@/assets/videos/postal19.mp4';
import postal20 from '@/assets/videos/postal20.mp4';
import axios from 'axios';


export default {

  data() {
    return {
      textAnimationStarted: false,
      copiedTimeout: 0,
      allowDownload: true,
      videos: [
        postal1,
        postal2,
        postal3,
        postal4,
        postal5,
        postal6,
        postal7,
        postal8,
        postal9,
        postal10,
        postal11,
        postal12,
        postal13,
        postal14,
        postal15,
        postal16,
        postal17,
        postal18,
        postal19,
        postal20,
      ]
    }
  },

  computed: {
    ...mapGetters(['AppMessage', 'AppPostalURL', 'AppVideosApi']),
  },

  created() {
  },

  mounted() {
    if (!this.AppMessage.pid) {
      this.back();
      return;
    }
    window.addEventListener('resize', this.resize);
    this.resize();
  },

  methods: {

    async downloadVideo(e) {
      e.preventDefault();
      if (!this.allowDownload) return;
      this.allowDownload = false;

      this.$refs.popup.classList.add('show');

      const response = await axios.post(this.AppVideosApi, {
        title: this.AppMessage.title,
        msg: this.AppMessage.msg,
        sender: this.AppMessage.rem,
        vidid: this.AppMessage.pid,
        code: this.AppMessage.code,
      });

      this.$refs.popup.classList.remove('show');
      this.allowDownload = true;
      window.open(response.data.url, '_blank');
    },

    async onClickCopyCode(e) {
      e.preventDefault();
      //this.$router.push({ path: 'merrychristmas/' +  this.AppMessage.uniqueid});
      var copyText = this.AppMessage.shareurl;
      var view = this;
      var text = this.$refs.bt2.innerHTML;
      this.$refs.bt2.innerHTML = 'Link copiado';
      this.$refs.bt2.classList.add('copied');
      clearTimeout(this.copiedTimeout);

      this.copiedTimeout = setTimeout(function () {
        view.$refs.bt2.innerHTML = text;
        view.$refs.bt2.classList.remove('copied');
      }, 1000);

      try {
        await navigator.clipboard.writeText(copyText);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },

    back() {
      this.$router.push({ path: '/' });
      document.getElementById('footer').classList.remove('hide');
      document.getElementById('footer').classList.remove('removesocial');
      document.querySelector('.lines.r.mobile').classList.remove('hide');
      document.querySelector('.lines.l.mobile').classList.remove('hide');
      document.querySelector('.lines.r.desktop').classList.remove('hide');
      document.querySelector('.lines.l.desktop').classList.remove('hide');
    },

    switcherino(e) {
      e.preventDefault();
      this.$refs.coll.classList.add('move');
      this.$refs.colr.classList.add('move');
      this.$refs.nav.classList.add('hide');
      setTimeout(function () {
        document.getElementById('footer').classList.remove('hide');
      }, 300);
    },

    resize() {
      if (window.innerWidth < 769) {
        document.getElementById('footer').classList.add('hide');
        document.querySelector('.lines.r.mobile').classList.add('hide');
        document.querySelector('.lines.l.mobile').classList.add('hide');
        document.querySelector('.lines.r.desktop').classList.add('hide');
        document.querySelector('.lines.l.desktop').classList.add('hide');
      } else {
        document.getElementById('footer').classList.remove('hide');
        document.getElementById('footer').classList.remove('social');
        document.querySelector('.lines.r.mobile').classList.remove('hide');
        document.querySelector('.lines.l.mobile').classList.remove('hide');
        document.querySelector('.lines.r.desktop').classList.remove('hide');
        document.querySelector('.lines.l.desktop').classList.remove('hide');
      }
    },

    startTextAnimation(text, div, delay) {
      this.textAnimationStarted = true;

      setTimeout(function () {
        const delay = 0.01;
        let curr = '';

        for (var i = 0; i < text.length; i++) {
          var character = text.charAt(i);
          div.innerHTML = curr + '<span class="fadeInDown" style="-webkit-animation-delay: ' + i * delay + 's; animation-delay: ' + i * delay + 's">' + character + "</span>";
          curr = div.innerHTML;
        }

        div.classList.add('show');
      }, delay);


    },

    reset() {
      this.$refs.title.innerHTML = '';
      this.$refs.msg.innerHTML = '';
      this.$refs.rem.innerHTML = '';
      this.textAnimationStarted = false;
      this.$refs.repeat.classList.remove('show');
    },

    playVideo() {
      this.$refs.video.currentTime = 0;
      this.$refs.video.play();
      this.reset();
    },

    ontimeupdate() {
      if (this.$refs.video.currentTime > 7) {
        if (!this.textAnimationStarted) {
          this.startTextAnimation(this.AppMessage.title, this.$refs.title, 0);
          this.startTextAnimation(this.AppMessage.msg, this.$refs.msg, 300);
          this.startTextAnimation(this.AppMessage.rem, this.$refs.rem, 1350);
        }
      }

      if (this.$refs.video.currentTime > 11) {
        this.$refs.repeat.classList.add('show');
      }
    },

    share(e, where) {
      e.preventDefault();

      if (!this.allowDownload) return;

      if (where == 'facebook') {
        window.open('https://www.facebook.com/sharer.php?u=' + this.AppMessage.shareurl, '_blank');
      }

      if (where == 'twitter') {
        window.open('https://twitter.com/share?url=' + this.AppMessage.shareurl + '&text=Betclic Jinglebet - Vê aqui o postal criado para ti', '_blank');
      }

      if (where == 'whatsapp') {
        if (window.innerWidth > 760) {
          //window.open('https://api.whatsapp.com:/send?text=' + this.AppMessage.shareurl, '_blank');
          window.open('whatsapp://send?text=' + this.AppMessage.shareurl);
        } else {
          window.open('whatsapp://send?text=' + this.AppMessage.shareurl);
        }
      }

    }
  }
}
</script>


<style lang="scss">
#finish {
  background: #224040;
  background-image: url('@/assets/images/choose_bg.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: block;
  position: relative;
  z-index: 1;

  .popup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 225px;
    border-radius: 12px;
    border: 2px solid #DBDBDB;
    background: #fff;
    box-shadow: 0px 0px 10px #000;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s;

    &.show {
      opacity: 1;
    }

    h2 {
      font-family: 'betclic-condensed-regular';
      font-size: 38px;
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    p {
      font-family: 'betclic-regular';
      font-size: 14px;
      font-weight: 500;
      color: #000;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 12px;
        font-weight: 500;
        color: #EF010A;
        margin-left: 10px;
        text-align: left;
      }
    }

    .loader {
      height: 4px;
      width: 290px;
      --c: no-repeat linear-gradient(#EF010A 0 0);
      background: var(--c), var(--c), #DBDBDB;
      background-size: 60% 100%;
      animation: l16 3s infinite;
      margin: 25px auto;
      border-radius: 4px;
    }

    @keyframes l16 {
      0% {
        background-position: -150% 0, -150% 0
      }

      66% {
        background-position: 250% 0, -150% 0
      }

      100% {
        background-position: 250% 0, 250% 0
      }
    }
  }

  .nav {
    position: absolute;
    left: 0;
    bottom: 0;
    background: #F8CF7D;
    height: 70px;
    width: 100%;
    z-index: 1111111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
    transition: all .3s;

    @media only screen and (max-width: 768px) {
      display: flex;
    }

    &.hide {
      transform: translateY(100%);
    }

    p {
      font-family: 'betclic-bold-italic';
      font-size: 19px;
      text-transform: uppercase;
      padding-left: 15px;
    }

    a {
      font-family: 'betclic-medium';
      color: #000;
      padding-right: 15px;
    }
  }

  .col {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .center {
      position: relative;

      @media only screen and (max-width: 768px) {
        margin-top: -80px;
      }
    }

    &.l {

      @media only screen and (max-width: 768px) {
        width: 100%;
        transform: translateX(100%);
        transition: all .3s ease-out;

        &.move {
          transform: translateX(0%);
        }
      }

      .social {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px 0;

        @media only screen and (max-width: 580px) {}

        a {
          border: 1px solid #fff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            width: 25px;
            height: 25px;
          }

          &:hover {
            background: #fff;

            svg {
              path {
                fill: #8E0005;
              }
            }
          }
        }
      }

      .download {
        position: relative;

        span {
          &.hide {
            opacity: 0;
          }
        }

        img {
          display: none;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);

          &.show {
            display: block;
          }
        }
      }

      .logo {
        max-width: 536px;
        margin: 0 auto 30px auto;
        width: 90%;
        cursor: pointer;

        @media only screen and (max-width: 768px) {
          width: 260px;
        }
      }

      p {
        font-family: 'betclic-condensed-regular';
        color: #fff;
        font-size: 38px;
        font-weight: 500;
        line-height: 90%;
        text-transform: uppercase;

        @media only screen and (max-width: 768px) {
          font-size: 24px;
          margin-bottom: 40px;
        }
      }

      .bottom {
        margin-top: 50px;

        p {
          font-family: 'betclic-medium';
          font-size: 18px;
          margin-bottom: 20px;

          @media only screen and (max-width: 768px) {
            font-size: 16px;
          }
        }

        a {
          color: #F40009;
          margin-top: 10px;
          display: block;
        }
      }

      .bt {
        width: 331px;
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
        margin: auto;
        margin-bottom: 15px;
        box-shadow: -4px 4px 0px #000000;

        @media only screen and (max-width: 768px) {
          width: 290px;
          height: 55px;
        }

        &.down {
          box-shadow: none;
          position: relative;
          top: 2px;
        }

        &.copy {
          background: #F40009;
          color: #fff;

          &.copied {
            background: green;
          }
        }

        @media only screen and (max-width: 768px) {
          margin: 15px auto 0 auto;
        }
      }
    }

    &.r {
      right: 0;
      left: auto;
      background: #000;
      background-image: url('@/assets/images/home_bg.jpg');
      background-size: cover;
      background-position: center;

      @media only screen and (max-width: 768px) {
        left: 0;
        right: auto;
        width: 100%;
        transition: all .3s ease-out;

        &.move {
          transform: translateX(-100%);
        }
      }

      .center {
        @media only screen and (max-width: 580px) {
          width: 300px;
          height: 533px;

          video {
            width: 300px;
            height: 533px;
          }
        }
      }

      .repeat {
        position: absolute;
        right: 10px;
        bottom: 15px;
        opacity: 0;
        pointer-events: none;
        transition: all .3s ease-out;
        cursor: pointer;
        z-index: 10;
        width: 55px;
        height: 55px;

        @media only screen and (max-width: 580px) {
          transform: scale(0.8);
          right: 5px;
          bottom: 5px;
        }

        .shadow {
          width: 55px;
          height: 55px;
          background: #000;
          border-radius: 50%;
          position: absolute;
          left: -2px;
          bottom: -2px;
        }

        img {
          position: relative;
          transition: all .3s ease-out;
          z-index: 1;
        }

        &.show {
          opacity: 1;
          pointer-events: all;
        }

        &:hover {
          img {
            transform: rotate(-360deg);
          }
        }
      }

      .message {
        position: absolute;
        width: calc(100% - 52px);
        height: 100%;
        left: 0;
        top: 0;
        font-family: 'betclic-bold';
        font-size: 17px;
        font-weight: 700;
        line-height: 20.4px;
        text-align: left;

        @media only screen and (max-width: 580px) {
          font-size: 12px;
          line-height: 17.4px;
        }

        .field {
          position: absolute;
          left: 47px;
          opacity: 0;

          @media only screen and (max-width: 580px) {
            left: 35px;
          }

          &.title {
            top: 234px;

            @media only screen and (max-width: 580px) {
              top: 172px
            }
          }

          &.mensagem {
            top: 306px;

            @media only screen and (max-width: 580px) {
              top: 224px
            }
          }

          &.remetente {
            top: 494px;

            @media only screen and (max-width: 580px) {
              top: 363px
            }
          }

          &.show {
            opacity: 1;
          }

          .fadeInDown {
            opacity: 0;
            -webkit-animation: fadeInDown 1s;
            animation: fadeInDown 1s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
          }

          @keyframes fadeInDown {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
        }

      }
    }

  }

  &.v-enter-from {
    .col {
      &.r {
        width: 100%;
      }
    }
  }

  &.v-enter-to {
    .col {
      &.r {
        width: 50%;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }

  }

  &.v-leave-from {}

  &.v-leave-to {}

  &.v-enter-active {

    transition: all 2s;

    .col {
      &.r {
        transition: all 1s cubic-bezier(0.365, 1.650, 0.575, 0.830);
        transition-timing-function: cubic-bezier(0.365, 1.650, 0.575, 0.830);
        transition-delay: .2s;
      }
    }

  }

  &.v-leave-active {}
}
</style>
