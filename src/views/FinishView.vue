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
      <img class="forms l" src="@/assets/images/home_forms_left.png" />
      <img class="forms r" src="@/assets/images/home_forms_right.png" />

      <div class="center">
        <img class="finishlogo" src="@/assets/images/home_logo.png" @click="$router.push({ path: '/' })" />
        <p>partilha o postal<br>com os teus amigos<br>e ajuda-os a ganhar<br />freebets!</p>

        <div class="social">
          <a href="#" target="_blank" @click="downloadVideo($event)">

            <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53.0615" height="50.939" fill="#F40009" />
              <g clip-path="url(#clip0_4024_1410)">
                <path
                  d="M33.8811 10.1357L34.125 10.1396C38.4196 10.2723 41.8606 13.7934 41.8645 18.1193V32.8811L41.8606 33.125C41.7279 37.4196 38.2069 40.8606 33.8809 40.8645H19.1192L18.8752 40.8606C14.5807 40.7279 11.1397 37.2069 11.1357 32.8809V18.1192L11.1396 17.8752C11.2723 13.5807 14.7934 10.1397 19.1193 10.1357H33.8811ZM33.8811 12.0788H19.1192L18.8977 12.0828C15.6643 12.1993 13.0788 14.8573 13.0788 18.1192V32.8811L13.0828 33.1025C13.1993 36.3359 15.8573 38.9215 19.1192 38.9215H33.8811L34.1025 38.9175C37.3359 38.8009 39.9215 36.1429 39.9215 32.8811V18.1192L39.9175 17.8977C39.8009 14.6643 37.1429 12.0788 33.8811 12.0788ZM26.5 16.7786L26.757 16.7825C31.4531 16.9227 35.2173 20.7712 35.2216 25.5002C35.2216 30.3169 31.3169 34.2216 26.5001 34.2216C21.6834 34.2216 17.7786 30.3169 17.7786 25.5001C17.7786 20.7694 21.5451 16.9183 26.243 16.7823L26.5 16.7786ZM26.5001 18.7216C22.7565 18.7216 19.7216 21.7565 19.7216 25.5001C19.7216 29.2438 22.7565 32.2786 26.5001 32.2786C30.2438 32.2786 33.2786 29.2438 33.2786 25.5001C33.2786 21.7565 30.2438 18.7216 26.5001 18.7216ZM34.9882 14.9334C35.7286 14.9334 36.3288 15.5336 36.3288 16.2739C36.3288 17.0143 35.7286 17.6145 34.9882 17.6145C34.2478 17.6145 33.6476 17.0143 33.6476 16.2739C33.6476 15.5336 34.2478 14.9334 34.9882 14.9334Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_4024_1410">
                  <rect width="31" height="31" fill="white" transform="translate(11 10)" />
                </clipPath>
              </defs>
            </svg>

          </a>
          <a :href="'https://www.facebook.com/sharer.php?u=' + shareUrl" @click="share($event, 'facebook')">
            <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53.0615" height="50.939" fill="#F40009" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M28.9237 19.628V17.4959C28.9237 16.4749 29.5726 16.2287 30.0322 16.2287H32.8357V11.6735H28.966C24.6771 11.6735 23.7137 15.0513 23.7137 17.2283V19.628H21.2246V24.9388H23.7359V38.2042H28.7362V24.9388H32.4386L32.6059 22.8496L32.8981 19.628H28.9237Z"
                fill="white" />
            </svg>
          </a>
          <a target="_blank" :href="'https://twitter.com/share?url=' + shareUrl + '&text=' + shareText"
            @click="share($event, 'twitter')">

            <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53.0615" height="50.939" fill="#F40009" />
              <path
                d="M29.3837 23.5138L38.4702 12.7347H36.317L28.4271 22.094L22.1256 12.7347H14.8574L24.3867 26.8877L14.8574 38.1912H17.0108L25.3426 28.3074L31.9976 38.1912H39.2657L29.3831 23.5138H29.3837ZM26.4344 27.0124L25.4689 25.603L17.7866 14.389H21.094L27.2937 23.4391L28.2592 24.8484L36.318 36.6121H33.0106L26.4344 27.0129V27.0124Z"
                fill="white" />
            </svg>

          </a>

          <a target="_blank" :href="'https://twitter.com/share?url=' + shareUrl + '&text=' + shareText"
            @click="share($event, 'whatsapp')">

            <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53.0615" height="50.939" fill="#F40009" />
              <path
                d="M37.3665 13.6401C35.9452 12.1629 34.2535 10.992 32.3898 10.1955C30.5259 9.39888 28.5271 8.99256 26.5097 9.0001C23.8128 9.00282 21.1637 9.7365 18.828 11.1277C16.4923 12.5188 14.5519 14.5186 13.2011 16.9268C11.8503 19.335 11.1366 22.0671 11.1314 24.8493C11.1262 27.6317 11.8296 30.3664 13.1714 32.78L11 41L19.1426 38.8C21.391 40.0904 23.9174 40.7782 26.4903 40.8C30.5804 40.8002 34.5049 39.1336 37.4095 36.1632C40.3143 33.193 41.9641 29.1592 42 24.9401C41.9864 22.8347 41.57 20.7528 40.7749 18.8137C39.9799 16.8746 38.8215 15.1165 37.3665 13.6401ZM26.5097 38.06C24.2176 38.0616 21.9673 37.426 19.9956 36.22L19.5303 35.92L14.7029 37.24L15.9825 32.38L15.6723 31.88C14.0229 29.1334 13.4074 25.8581 13.9422 22.6745C14.4771 19.491 16.1252 16.6204 18.5744 14.6065C21.0235 12.5927 24.1036 11.5754 27.2311 11.7475C30.3586 11.9195 33.3165 13.2689 35.5441 15.5401C37.9791 17.9964 39.373 21.3471 39.4215 24.8601C39.3909 28.3718 38.0169 31.729 35.5988 34.2012C33.1808 36.6732 29.9141 38.0602 26.5097 38.06ZM33.5084 28.1801C33.1207 27.9801 31.2402 27.0201 30.8912 26.9001C30.5422 26.7801 30.2708 26.7001 30.0188 27.1001C29.6396 27.6363 29.2316 28.1503 28.7974 28.64C28.5841 28.92 28.3515 28.94 27.9637 28.64C25.753 27.7389 23.9112 26.0789 22.7486 23.9401C22.3415 23.2401 23.1363 23.2801 23.873 21.7801C23.9275 21.6719 23.9558 21.5519 23.9558 21.4301C23.9558 21.3083 23.9275 21.1883 23.873 21.0801C23.873 20.8801 23.0006 18.9201 22.6904 18.1401C22.3802 17.3601 22.07 17.4801 21.818 17.4601H21.0619C20.866 17.4632 20.673 17.5094 20.4958 17.5956C20.3186 17.6818 20.1613 17.8061 20.0344 17.9601C19.5994 18.3964 19.2601 18.9239 19.0394 19.5069C18.8187 20.09 18.7216 20.7151 18.7548 21.3401C18.8764 22.8363 19.4226 24.2623 20.3252 25.4401C21.9774 27.9917 24.2416 30.0586 26.8974 31.44C28.2904 32.2788 29.9092 32.6296 31.5116 32.44C32.0451 32.3308 32.5505 32.107 32.9947 31.783C33.439 31.4592 33.8122 31.0424 34.0901 30.56C34.3475 29.9712 34.4286 29.3166 34.3227 28.68C34.1482 28.48 33.8962 28.3801 33.5084 28.1801Z"
                fill="white" />
            </svg>

          </a>
        </div>

        <a href="#" class="copy bt" ref="bt2" @mousedown="this.$refs.bt2.classList.add('down')"
          @mouseup="this.$refs.bt2.classList.remove('down')" @mouseleave="this.$refs.bt2.classList.remove('down')"
          @click="onClickCopyCode($event)">
          <svg width="248" height="64" viewBox="0 0 248 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 10.2021L10.8867 1.5L236.368 1.49999L245.629 10.208L246.486 53.4658L236.389 62.5L10.9023 62.5L1.5 53.4844L1.5 10.2021Z"
              fill="#810000" fill-opacity="0.8" stroke="#FF0000" stroke-width="3" />
          </svg>
          <span ref="thespan">Copiar link</span></a>
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
      var text = this.$refs.thespan.innerHTML;
      this.$refs.thespan.innerHTML = 'Link copiado';
      this.$refs.bt2.classList.add('copied');
      clearTimeout(this.copiedTimeout);

      this.copiedTimeout = setTimeout(function () {
        view.$refs.thespan.innerHTML = text;
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
      /*document.querySelector('.lines.r.mobile').classList.remove('hide');
      document.querySelector('.lines.l.mobile').classList.remove('hide');
      document.querySelector('.lines.r.desktop').classList.remove('hide');
      document.querySelector('.lines.l.desktop').classList.remove('hide');*/
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
      } else {
        document.getElementById('footer').classList.remove('hide');
        document.getElementById('footer').classList.remove('social');
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
  overflow: hidden;
  display: block;
  position: relative;
  z-index: 1;
  $anime: all 1s cubic-bezier(.6, 1.43, .57, 1.01);

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
    bottom: 8px;
    background: #b40005;
    height: 70px;
    width: 100%;
    z-index: 1111111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
    transition: all .3s;
    color: #fff;

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
      color: #fff;
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
      }
    }

    &.l {
      position: relative;

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

          margin: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 0px #7B1920;

          &:hover {
            box-shadow: none;

            svg {
              path {
                fill: #F40009;
              }

              rect {
                fill: #fff;
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

      .finishlogo {
        max-width: 488px;
        margin: 0 auto 40px auto;
        width: 90%;
        cursor: pointer;

        @media only screen and (max-width: 768px) {
          width: 260px;
        }
      }

      p {
        font-family: 'betclic-extra-bold';
        color: #fff;
        font-size: 32px;
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
          text-transform: none;

          @media only screen and (max-width: 768px) {
            font-size: 16px;
          }
        }

        a {
          color: #fff;
          margin-top: 10px;
          display: block;
        }
      }

      .bt {
        text-transform: uppercase;
        font-family: 'betclic-bold-italic';
        text-decoration: none;
        font-size: 19.28px;
        margin: auto;
        margin-bottom: 15px;
        color: #fff;
        position: relative;
        display: block;

        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        &:hover {
          svg {
            path {
              fill-opacity: 1;
            }
          }
        }

        @media only screen and (max-width: 768px) {
          svg {
            width: 290px;
            height: 55px;
          }
        }

        &.down {
          svg {
            path {
              fill-opacity: 1;
            }
          }
        }

        &.copy {
          &.copied {
            svg {
              path {
                fill: #456f45;
              }
            }
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
      background-image: url('@/assets/images/finished_bg.png');
      background-size: cover;
      background-position: center;

      @media only screen and (max-width: 768px) {
        left: 0;
        right: auto;
        width: 100%;
        transition: $anime;

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
        transform: translateX(100%);
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

  &.v-enter-to {
    .col {
      &.r {}
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
