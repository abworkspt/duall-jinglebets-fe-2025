<template>
    <div id="footer" ref="footer">

        <div class="social">
            <!--<a href="#" target="_blank">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.88901 0.0498047H14.574C17.3639 0.0498047 19.6588 2.25817 19.6588 4.94295V13.257C19.6588 15.9418 17.3639 18.1502 14.574 18.1502H5.88901C3.09908 18.1502 0.80423 15.9418 0.80423 13.257V4.94295C0.80423 2.25817 3.09908 0.0498047 5.88901 0.0498047ZM15.2936 3.21102C15.8787 3.21102 16.3737 3.68744 16.3737 4.25043C16.3737 4.81342 15.8787 5.28985 15.2936 5.28985C14.6639 5.28985 14.2135 4.81342 14.2135 4.25043C14.2135 3.68744 14.6633 3.21102 15.2936 3.21102ZM10.2088 4.16387H10.2542C13.0441 4.16387 15.3842 6.41583 15.3842 9.10061C15.3842 11.8284 13.0441 14.0374 10.2542 14.0374H10.2088C7.41891 14.0374 5.12406 11.829 5.12406 9.10061C5.12406 6.41583 7.41891 4.16387 10.2088 4.16387ZM10.2088 5.85284H10.2542C12.0992 5.85284 13.6291 7.32508 13.6291 9.10061C13.6291 10.9191 12.0992 12.3914 10.2542 12.3914H10.2088C8.36377 12.3914 6.83387 10.9191 6.83387 9.10061C6.83387 7.32508 8.36377 5.85284 10.2088 5.85284ZM5.93432 1.60924H14.5287C16.4637 1.60924 18.0382 3.12508 18.0382 4.98655V13.214C18.0382 15.0761 16.463 16.5914 14.5287 16.5914H5.93432C3.99929 16.5914 2.42474 15.0755 2.42474 13.214V4.98655C2.42474 3.12445 3.99995 1.60924 5.93432 1.60924Z"
                        fill="white" />
                </svg>
            </a>-->
            <a :href="'https://www.facebook.com/sharer.php?u=' + shareUrl" target="_blank">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.26446 5.94891V4.43373C6.26446 3.70809 6.72567 3.53315 7.05224 3.53315H9.04459V0.295898H6.29454C3.24656 0.295898 2.56191 2.69645 2.56191 4.24358V5.94891H0.792999V9.72317H2.57767V19.1504H6.13126V9.72317H8.76243L8.88131 8.23841L9.08899 5.94891H6.26446Z"
                        fill="white" />
                </svg>
            </a>
            <a target="_blank" :href="'https://twitter.com/share?url=' + shareUrl + '&text=' + shareText">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.3001 7.71013L17.7576 0.0498047H16.2274L10.6203 6.70116L6.14197 0.0498047H0.976746L7.74887 10.1078L0.976746 18.1409H2.50705L8.42824 11.1168L13.1577 18.1409H18.3229L11.2997 7.71013H11.3001ZM9.20411 10.1964L8.51795 9.19489L3.05845 1.22543H5.40891L9.81479 7.65704L10.501 8.6586L16.2281 17.0187H13.8776L9.20411 10.1968V10.1964Z"
                        fill="white" />
                </svg>
            </a>
        </div>
        <div class="rt">
            <a href="https://postaisjinglebet.betclic.pt/regulamento_jinglebet.pdf" target="_blank" class="reg">Regulamento</a>
            <a href="https://www.betclic.pt/" target="_blank" class="external">
                <span>Betclic</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.38116 0C6.96695 0 6.63116 0.335786 6.63116 0.75C6.63116 1.16421 6.96695 1.5 7.38116 1.5H9.93932L5.10328 6.33605C4.81038 6.62894 4.81038 7.10381 5.10328 7.39671C5.39617 7.6896 5.87104 7.6896 6.16394 7.39671L11 2.56064V5.11884C11 5.53305 11.3358 5.86884 11.75 5.86884C12.1642 5.86884 12.5 5.53305 12.5 5.11884V1.75C12.5 0.783502 11.7165 0 10.75 0H7.38116ZM0 3.55603C0 2.03725 1.23122 0.80603 2.75 0.80603H2.93442C3.34863 0.80603 3.68442 1.14182 3.68442 1.55603C3.68442 1.97024 3.34863 2.30603 2.93442 2.30603H2.75C2.05964 2.30603 1.5 2.86567 1.5 3.55603V9.45872C1.5 10.1491 2.05965 10.7087 2.75 10.7087H9.05079C9.68214 10.7087 10.1939 10.1969 10.1939 9.56556C10.1939 9.15135 10.5297 8.81556 10.9439 8.81556C11.3582 8.81556 11.6939 9.15135 11.6939 9.56556C11.6939 11.0253 10.5106 12.2087 9.05079 12.2087H2.75C1.23122 12.2087 0 10.9775 0 9.45872V3.55603Z"
                        fill="#F8CF7D" />
                </svg>
            </a>
        </div>

    </div>
</template>

<script>

export default {

    data() {
        return {
            shareUrl: 'https://postaisjinglebet.betclic.pt/',
            shareText: 'Este Natal envia postais aos teus amigos e deixa-te de likes!'
        };
    },

};
</script>

<style lang="scss">
#footer {
    position: absolute;
    width: 100%;
    height: 39px;
    bottom: 15px;
    left: 0;
    z-index: 10;

    @media only screen and (max-width: 580px) {
        bottom: 25px;
    }

    .rt {
        position: absolute;
        right: 40px;
        bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media only screen and (max-width: 580px) {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
            bottom: 55px;
        }

        a {
            display: flex;
            align-items: center;
            font-family: 'betclic-regular';
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;

            &.external {
                margin-left: 15px;
                color: #F3B763;

                svg {
                    margin-left: 6px;
                }
            }

            &:hover {
                text-decoration: underline;
            }

        }
    }

    .reg {}

    .social {
        display: flex;
        align-items: center;
        position: absolute;
        left: 90px;

        @media only screen and (max-width: 580px) {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
        }

        p {
            font-family: 'betclic-regular';
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            margin-right: 12px;
        }

        a {
            border: 1px solid #fff;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

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

    &.hide {
        display: none;
    }

    &.removesocial {
        .social {
            display: none;
        }

        .reg {
            bottom: -5px;
        }

        .rt {
            bottom: -10px;
        }
    }
}
</style>