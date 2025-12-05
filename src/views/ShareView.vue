<template>
    <section id="share">
        <div class="col l" ref="coll">
            <img class="forms l" src="@/assets/images/home_forms_left.png" />
            <img class="forms r" src="@/assets/images/home_forms_right.png" />

            <div class="center">
                <img class="logoshare" src="@/assets/images/home_logo.png" @click="$router.push({ path: '/' })" />
                <p class="feedback" ref="feedback" v-html="feedbackText"></p>

                <div class="bet">
                    <p class="note" ref="note">{{ codeText }}</p>

                    <div class="code">
                        <div @click="openScratch()" class="scratch deactivated" ref="scratchbtn">
                            <div ref="scratchinside" class="inside">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30.5" cy="30.5" r="29.75" stroke="black" stroke-width="1.5" />
                                    <path
                                        d="M26 29V22C26 21.4477 26.4477 21 27 21H34C34.5523 21 35 21.4477 35 22V29C35 29.5523 35.4477 30 36 30H39.6801C40.5573 30 41.0094 31.0489 40.4071 31.6866L31.3544 41.2719C30.9747 41.6738 30.341 41.6914 29.9396 41.3112L19.8218 31.726C19.1656 31.1042 19.6056 30 20.5096 30H25C25.5523 30 26 29.5523 26 29Z"
                                        stroke="black" stroke-width="1.5" />
                                </svg>
                            </div>
                        </div>
                        <span>{{ code }}</span>
                    </div>
                    <p class="note bottom hide" ref="notebot">Utiliza este código na tua conta<br />para resgatar o
                        prémio</p>
                </div>

                <div class="bottom">
                    <!--<a class="link" ref="bt5" href="https://www.betclic.pt/scp-jinglebet24" target="_blank"
                        @mousedown="this.$refs.bt5.classList.add('down')"
                        @mouseup="this.$refs.bt5.classList.remove('down')"
                        @mouseleave="this.$refs.bt5.classList.remove('down')">

                        <svg width="248" height="64" viewBox="0 0 248 64" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 10.2021L10.8867 1.5L236.368 1.49999L245.629 10.208L246.486 53.4658L236.389 62.5L10.9023 62.5L1.5 53.4844L1.5 10.2021Z"
                                fill="#810000" fill-opacity="0.8" stroke="#FF0000" stroke-width="3" />
                        </svg>
                        <span>Descobre o Jinglebet e todos os<br />presentes de Natal que temos para ti</span>
                    </a>-->
                    <p>Queres enviar um novo postal?<br /><a href="#" @click="$router.push({ path: '/' })">Clica
                            aqui</a></p>
                </div>
            </div>
        </div>
        <div class="col r" ref="colr">
            <div class="center">
                <div class="repeat" ref="repeat">
                    <img @click="playVideo()" src="@/assets/images/repeat.svg" />
                    <div class="shadow"></div>
                </div>
                <img class="loader" ref="videoloader" src="@/assets/images/loader2.gif" />
                <video ref="video" @timeupdate="ontimeupdate()" width="405" height="720" playsinline muted>
                    <source :src="videos[vidid - 1]" type="video/mp4">
                </video>
                <div class="message">
                    <div ref="title" class="title field">{{ title }}</div>
                    <div ref="msg" class="mensagem field">{{ msg }}</div>
                    <div ref="rem" class="remetente field">{{ remetente }}</div>
                </div>
            </div>
        </div>
        <div class="nav" ref="nav">
            <p>gostavas de ganhar<br />uma freebet?</p>
            <a href="#" @click="switcherino($event)">Clica aqui</a>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
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

export default {
    data() {
        return {
            textAnimationStarted: false,
            title: '',
            msg: '',
            remetente: '',
            vidid: null,
            code: '',
            codeText: 'Clica em baixo e vê se te saiu a sorte grande.',
            codeTextWin: 'Parabéns. <br />Saiu-te <br />a sorte grande!',
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
            ],
            feedbackText: 'Descobre se<br />este postal tem<br />algum presente<br />escondido',
            frasesSemPremio: [
                'És um azarado <br />fofo! Tenta no <br />próximo natal.',
                'Desculpa mas <br />este não foi o teu <br />dia de sorte!',
                'És um zero à <br />esquerda na <br />sorte querido.'
            ],
        };
    },

    computed: {
        ...mapGetters(['AppCMSApi']),
    },

    created() {
        this.$watch(
            () => this.$route.params.id,
            this.fetchData,
            { immediate: true }
        )
    },

    mounted() {
        window.addEventListener('resize', this.resize);
        document.getElementById('soundbutton').classList.add('show');
        document.querySelector('#soundbutton .sound').classList.remove('on');
        document.querySelector('#soundbutton .sound').classList.add('off');
        this.resize();
    },

    methods: {

        async fetchData(id) {
            const response = await axios.post(this.AppCMSApi + '/getpart', {
                pid: id
            });

            this.title = response.data.part.title;
            this.msg = response.data.part.message;
            this.remetente = response.data.part.sender;
            this.vidid = response.data.part.videoid;
            this.code = response.data.part.code;
            this.shareurl = response.data.shareurl;
            this.$refs.videoloader.classList.add('hide');
            this.$refs.video.classList.add('show');
            this.$refs.scratchbtn.classList.remove('deactivated');
            this.$refs.video.load();
            this.playVideo();
        },

        switcherino(e) {
            e.preventDefault();
            this.$refs.coll.classList.add('move');
            this.$refs.colr.classList.add('move');
            this.$refs.nav.classList.add('hide');
            setTimeout(function () {
                //document.getElementById('footer').classList.remove('hide');
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
                    this.startTextAnimation(this.title, this.$refs.title, 0);
                    this.startTextAnimation(this.msg, this.$refs.msg, 300);
                    this.startTextAnimation(this.remetente, this.$refs.rem, 1350);
                }
            }

            if (this.$refs.video.currentTime > 11) {
                this.$refs.repeat.classList.add('show');
            }
        },

        openScratch() {
            this.$refs.scratchinside.classList.add('hide');
            this.$refs.scratchbtn.classList.add('deactivated');
            this.$refs.note.classList.add('hide');

            if (this.code) {
                this.$refs.feedback.innerHTML = this.codeTextWin;
                this.$refs.notebot.classList.remove('hide');
            } else {

                const frases = this.frasesSemPremio;
                const randomIndex = Math.floor(Math.random() * frases.length);
                const frase = frases[randomIndex];

                if (this.$refs.feedback) {
                    this.$refs.feedback.innerHTML = frase; // aceita HTML
                }

                this.code = 'Sem prémio';
            }
        }
    }
}
</script>


<style lang="scss">
#share {
    overflow: hidden;
    display: block;
    position: relative;
    z-index: 1;
    $anime: all 1s cubic-bezier(.6, 1.43, .57, 1.01);

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

            @media only screen and (max-width: 768px) {}
        }

        &.l {

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

            .logoshare {
                max-width: 488px;
                margin: 0 auto 30px auto;
                cursor: pointer;

                @media only screen and (max-width: 768px) {
                    width: 260px;
                }
            }

            .feedback {
                height: 110px;
            }

            p {
                font-family: 'betclic-extra-bold';
                color: #fff;
                font-size: 32px;
                font-weight: 500;
                line-height: 90%;
                text-transform: uppercase;
                margin-bottom: 25px;

                @media only screen and (max-width: 768px) {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
            }

            .bet {
                p {
                    font-family: 'betclic-regular';
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    margin-bottom: 30px;
                    text-transform: none;

                    @media only screen and (max-width: 580px) {
                        width: 80%;
                        margin: 0 auto 30px auto;
                    }
                }

                .note {
                    max-width: 220px;
                    margin: 0 auto 25px auto;
                    line-height: 115%;

                    &.hide {
                        opacity: 0;
                    }

                    &.bottom {
                        opacity: 1;
                        opacity: 1;
                        position: absolute;
                        left: 50%;
                        bottom: 196px;
                        transform: translateX(-50%);
                        width: 350px;
                        max-width: none;

                        &.hide {
                            opacity: 0;
                        }
                    }
                }

                .code {
                    width: 300px;
                    height: 85px;
                    font-family: Arial;
                    font-size: 35px;
                    font-weight: 700;
                    border: 2px solid #fff;
                    color: #fff;
                    line-height: 85px;
                    margin: auto;
                    position: relative;
                    margin-bottom: 50px;

                    @media only screen and (max-width: 580px) {
                        width: 260px;
                        height: 65px;
                        line-height: 65px;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }

                    .scratch {
                        position: absolute;
                        left: -5px;
                        top: -5px;
                        width: calc(100% + 10px);
                        height: calc(100% + 10px);
                        z-index: 1;
                        border-radius: 9px;
                        overflow: hidden;
                        cursor: pointer;

                        &.deactivated {
                            pointer-events: none;
                        }

                        .inside {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            background-image: url('@/assets/images/scratchbg.png');
                            background-size: cover;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: all .3s;

                            &.hide {
                                transform: translateY(100%);
                                pointer-events: none;
                            }

                            svg {
                                @media only screen and (max-width: 580px) {
                                    width: 40px;
                                    height: 40px;
                                }
                            }
                        }

                        &:hover {
                            svg {
                                path {
                                    fill: #000;
                                }
                            }
                        }
                    }
                }
            }

            .bottom {
                margin-top: 50px;

                @media only screen and (max-width: 580px) {
                    margin-top: 30px;
                }

                .link {
                    position: relative;
                    display: block;
                    margin: 0px auto 30px;

                    svg {
                        height: 90px;
                        width: 340px;

                        @media only screen and (max-width: 580px) {
                            width: 264px
                        }

                    }

                    span {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 15px;
                        text-transform: uppercase;
                        font-family: 'betclic-bold';
                        color: #fff;
                        text-decoration: none;
                        line-height: 115%;
                        width: 100%;

                        @media only screen and (max-width: 580px) {
                            font-size: 12px;
                            line-height: 130%;
                        }
                    }

                    &.down,
                    &:hover {
                        svg {
                            path {
                                fill-opacity: 1;
                            }
                        }
                    }

                    @media only screen and (max-width: 768px) {}

                    @media only screen and (max-width: 580px) {
                        width: 280px;
                    }
                }

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
                    text-transform: none;
                    color: #fff;
                    margin-top: 5px;
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
            transition: $anime;

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
                        margin-top: -35px;
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
                    margin-top: -35px;
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

            video {

                &.show {
                    display: block;
                }
            }

            .loader {
                width: 50px;
                padding: 8px;
                aspect-ratio: 1;
                border-radius: 50%;
                background: #000000;
                --_m:
                    conic-gradient(#0000 10%, #000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                mask: var(--_m);
                -webkit-mask-composite: source-out;
                mask-composite: subtract;
                animation: l3 1s infinite linear;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);

                &.hide {
                    display: none;
                }
            }

            @keyframes l3 {
                to {
                    transform: translate(-50%, -50%) rotate(1turn)
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
}
</style>