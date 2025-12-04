<template>

    <section id="choose">
        <img ref="forml" class="forms l" src="@/assets/images/home_forms_left.png" />
        <img ref="formr" class="forms r" src="@/assets/images/home_forms_right.png" />

        <div @click="onClickMask($event)" @touchend="onClickMask($event)" @touchstart="onMasktouchStart($event)"
            ref="mask" class="mask"></div>
        <div class="grid-container">
            <div ref="grid" class="grid">
                <div v-for="row in this.imageRows" class="row">
                    <div v-for="image in row" :class="'sliderImage ' + image['click']" :iid="image['id']">
                        <img :src="image['img']" />
                    </div>
                </div>
            </div>
        </div>
        <div class="slider" ref="slider">

            <div class="pagination" ref="pagination">
                <div class="current" ref="pagcurrent"></div>

                <svg width="120" height="121" viewBox="0 0 120 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M118.403 0.703247L0.710938 119.703" stroke="white" stroke-width="2" />
                </svg>

                <div class="total" ref="pagtotal"></div>
            </div>

            <div class="images" ref="sliderImages">
                <img v-for="image in this.imageSlider" :src="image['img']" :class="'sliderimg img' + image['id']" />
            </div>

            <div class="nav" ref="nav">
                <div class="go r disabled" ref="navr" @click="moveSliderDirection('r')">

                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="rect" d="M0 0H60V60H0V0Z" fill="#F40009" />
                        <path class="path"
                            d="M29.1312 20.3055L18.3703 31.1852M18.3703 31.1852L29.1312 42.0648M18.3703 31.1852H47.9629"
                            stroke="white" stroke-width="2" />
                    </svg>

                </div>

                <div class="go l" ref="navl" @click="moveSliderDirection('l')">

                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="rect" d="M0 0H60V60H0V0Z" fill="#F40009" />
                        <path class="path"
                            d="M29.1312 20.3055L18.3703 31.1852M18.3703 31.1852L29.1312 42.0648M18.3703 31.1852H47.9629"
                            stroke="white" stroke-width="2" />
                    </svg>

                </div>
            </div>

            <div class="form" ref="form">
                <div class="padd">
                    <input type="text" placeholder="Título" class="title" ref="inputtitle" @blur="onInputblur()" />
                    <textarea placeholder="Mensagem" class="message" ref="inputmsg" @blur="onInputblur()"></textarea>
                    <input type="text" placeholder="Remetente" class="remetente" ref="inputremetente"
                        @blur="onInputblur()" />

                    <div ref="recaptcha"></div>

                    <a href="#" ref="bt3" class="submit" @click="submitPostal($event)"
                        @mousedown="this.$refs.bt3.classList.add('down')"
                        @mouseup="this.$refs.bt3.classList.remove('down')"
                        @mouseleave="this.$refs.bt3.classList.remove('down')"><span>Criar Postal</span>
                        <svg width="377" height="64" viewBox="0 0 377 64" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 10.2021L10.8867 1.5L365.368 1.49998L374.629 10.208L375.486 53.4658L365.389 62.5L10.9023 62.5L1.5 53.4844L1.5 10.2021Z"
                                fill="#810000" stroke="#FF0000" stroke-width="3" />
                        </svg>

                    </a>
                    <div class="error" ref="submiterror"></div>
                    <div class="loader" ref="submitloader"></div>
                </div>
            </div>

        </div>

        <div ref="balloon" @click="finalChoose()" class="balloon">
            <img src="@/assets/images/balloon.png" />
            <p>Escreve uma<br />mensagem<br /><span>e partilha<br>este postal</span></p>
        </div>

    </section>
</template>

<script>

import postal0 from '@/assets/postais/postal0.png';
import postal1 from '@/assets/postais/postal1.png';
import postal2 from '@/assets/postais/postal2.png';
import postal3 from '@/assets/postais/postal3.png';
import postal4 from '@/assets/postais/postal4.png';
import postal5 from '@/assets/postais/postal5.png';
import postal6 from '@/assets/postais/postal6.png';
import postal7 from '@/assets/postais/postal7.png';
import postal8 from '@/assets/postais/postal8.png';
import postal9 from '@/assets/postais/postal9.png';
import postal10 from '@/assets/postais/postal10.png';
import postal11 from '@/assets/postais/postal11.png';
import postal12 from '@/assets/postais/postal12.png';
import postal13 from '@/assets/postais/postal13.png';
import postal14 from '@/assets/postais/postal14.png';
import postal15 from '@/assets/postais/postal15.png';
import postal16 from '@/assets/postais/postal16.png';
import postal17 from '@/assets/postais/postal17.png';
import postal18 from '@/assets/postais/postal18.png';
import postal19 from '@/assets/postais/postal19.png';
import postal20 from '@/assets/postais/postal20.png';
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';

export default {

    inject: ["animateFrames"],


    data() {
        return {
            response: '',
            widgetId: null,

            imageRows: [
                [
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal2, 'click': '', 'id': 2 },
                    { 'img': postal3, 'click': '', 'id': 3 },
                    { 'img': postal4, 'click': '', 'id': 4 },
                    { 'img': postal5, 'click': '', 'id': 5 },
                    { 'img': postal6, 'click': '', 'id': 6 },
                    { 'img': postal7, 'click': '', 'id': 7 },
                    { 'img': postal8, 'click': '', 'id': 8 },
                    { 'img': postal9, 'click': '', 'id': 9 },
                    { 'img': postal10, 'click': '', 'id': 10 },
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal11, 'click': '', 'id': 11 },
                    { 'img': postal12, 'click': '', 'id': 12 },
                    { 'img': postal13, 'click': '', 'id': 13 },
                    { 'img': postal14, 'click': '', 'id': 14 },
                    { 'img': postal15, 'click': '', 'id': 15 },
                    { 'img': postal16, 'click': '', 'id': 16 },
                    { 'img': postal17, 'click': '', 'id': 17 },
                    { 'img': postal18, 'click': '', 'id': 18 },
                    { 'img': postal19, 'click': '', 'id': 19 },
                    { 'img': postal20, 'click': '', 'id': 20 },
                ],
                [
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal2, 'click': '', 'id': 2 },
                    { 'img': postal3, 'click': '', 'id': 3 },
                    { 'img': postal4, 'click': '', 'id': 4 },
                    { 'img': postal5, 'click': '', 'id': 5 },
                    { 'img': postal6, 'click': '', 'id': 6 },
                    { 'img': postal7, 'click': '', 'id': 7 },
                    { 'img': postal8, 'click': '', 'id': 8 },
                    { 'img': postal15, 'click': '', 'id': 15 },
                    { 'img': postal16, 'click': '', 'id': 16 },
                    { 'img': postal17, 'click': '', 'id': 17 },
                    { 'img': postal18, 'click': '', 'id': 18 },
                    { 'img': postal19, 'click': '', 'id': 19 },
                    { 'img': postal20, 'click': '', 'id': 20 },
                    { 'img': postal14, 'click': '', 'id': 14 },
                    { 'img': postal15, 'click': '', 'id': 15 },
                    { 'img': postal16, 'click': '', 'id': 16 },
                    { 'img': postal17, 'click': '', 'id': 17 },
                    { 'img': postal18, 'click': '', 'id': 18 },
                    { 'img': postal19, 'click': '', 'id': 19 },
                    { 'img': postal20, 'click': '', 'id': 20 },
                ],
                [
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal2, 'click': '', 'id': 2 },
                    { 'img': postal3, 'click': '', 'id': 3 },
                    { 'img': postal4, 'click': '', 'id': 4 },
                    { 'img': postal5, 'click': '', 'id': 5 },
                    { 'img': postal6, 'click': '', 'id': 6 },
                    { 'img': postal7, 'click': '', 'id': 7 },
                    { 'img': postal5, 'click': '', 'id': 5 },
                    { 'img': postal4, 'click': '', 'id': 4 },
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal0, 'click': 'unclickable', 'id': 0 },
                    { 'img': postal7, 'click': '', 'id': 7 },
                    { 'img': postal3, 'click': '', 'id': 3 },
                    { 'img': postal6, 'click': '', 'id': 6 },
                    { 'img': postal8, 'click': '', 'id': 8 },
                    { 'img': postal14, 'click': '', 'id': 14 },
                    { 'img': postal15, 'click': '', 'id': 15 },
                    { 'img': postal16, 'click': '', 'id': 16 },
                    { 'img': postal17, 'click': '', 'id': 17 },
                    { 'img': postal18, 'click': '', 'id': 18 },
                    { 'img': postal19, 'click': '', 'id': 19 },
                    { 'img': postal20, 'click': '', 'id': 20 },
                ],
                [
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal2, 'click': '', 'id': 2 },
                    { 'img': postal3, 'click': '', 'id': 3 },
                    { 'img': postal4, 'click': '', 'id': 4 },
                    { 'img': postal5, 'click': '', 'id': 5 },
                    { 'img': postal6, 'click': '', 'id': 6 },
                    { 'img': postal7, 'click': '', 'id': 7 },
                    { 'img': postal8, 'click': '', 'id': 8 },
                    { 'img': postal9, 'click': '', 'id': 9 },
                    { 'img': postal10, 'click': '', 'id': 10 },
                    { 'img': postal14, 'click': '', 'id': 14 },
                    { 'img': postal11, 'click': '', 'id': 11 },
                    { 'img': postal12, 'click': '', 'id': 12 },
                    { 'img': postal13, 'click': '', 'id': 13 },
                    { 'img': postal14, 'click': '', 'id': 14 },
                    { 'img': postal15, 'click': '', 'id': 15 },
                    { 'img': postal16, 'click': '', 'id': 16 },
                    { 'img': postal17, 'click': '', 'id': 17 },
                    { 'img': postal18, 'click': '', 'id': 18 },
                    { 'img': postal19, 'click': '', 'id': 19 },
                    { 'img': postal20, 'click': '', 'id': 20 },
                ],
                [
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal2, 'click': '', 'id': 2 },
                    { 'img': postal3, 'click': '', 'id': 3 },
                    { 'img': postal4, 'click': '', 'id': 4 },
                    { 'img': postal5, 'click': '', 'id': 5 },
                    { 'img': postal6, 'click': '', 'id': 6 },
                    { 'img': postal7, 'click': '', 'id': 7 },
                    { 'img': postal8, 'click': '', 'id': 8 },
                    { 'img': postal9, 'click': '', 'id': 9 },
                    { 'img': postal10, 'click': '', 'id': 10 },
                    { 'img': postal1, 'click': '', 'id': 1 },
                    { 'img': postal11, 'click': '', 'id': 11 },
                    { 'img': postal12, 'click': '', 'id': 12 },
                    { 'img': postal13, 'click': '', 'id': 13 },
                    { 'img': postal14, 'click': '', 'id': 14 },
                    { 'img': postal15, 'click': '', 'id': 15 },
                    { 'img': postal16, 'click': '', 'id': 16 },
                    { 'img': postal17, 'click': '', 'id': 17 },
                    { 'img': postal18, 'click': '', 'id': 18 },
                    { 'img': postal19, 'click': '', 'id': 19 },
                    { 'img': postal20, 'click': '', 'id': 20 },
                ],
            ],
            imageSlider: [
                { 'img': postal1, 'id': 1 },
                { 'img': postal2, 'id': 2 },
                { 'img': postal3, 'id': 3 },
                { 'img': postal4, 'id': 4 },
                { 'img': postal5, 'id': 5 },
                { 'img': postal6, 'id': 6 },
                { 'img': postal7, 'id': 7 },
                { 'img': postal8, 'id': 8 },
                { 'img': postal9, 'id': 9 },
                { 'img': postal10, 'id': 10 },
                { 'img': postal11, 'id': 11 },
                { 'img': postal12, 'id': 12 },
                { 'img': postal13, 'id': 13 },
                { 'img': postal14, 'id': 14 },
                { 'img': postal15, 'id': 15 },
                { 'img': postal16, 'id': 16 },
                { 'img': postal17, 'id': 17 },
                { 'img': postal18, 'id': 18 },
                { 'img': postal19, 'id': 19 },
                { 'img': postal20, 'id': 20 },
            ]
        };
    },

    mounted() {

        if (!this.AppStarted) {
            this.$router.push({ path: '/' });
            return;
        }

        this.setVars();
        gsap.registerPlugin(Draggable, InertiaPlugin);
        gsap.set(this.containerSelector, { willChange: "transform" });
        this.createImageGrid();
        this.lastCenteredElem = document.querySelectorAll(this.imageSelector)[(this.rowMidIndex - 1) * this.imgNum + this.imgMidIndex];
        this.createDraggable();
        this.resize();
        window.addEventListener("resize", this.resize);
        this.$refs.form.style.width = this.boxWidthBig + 'px';
        this.$refs.form.style.height = this.boxHeightBig + 'px';

        if (window.innerWidth < 768) {
            document.getElementById('footer').classList.add('hide');
        }

        if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
                this.widgetId = window.grecaptcha.render(this.$refs.recaptcha, {
                    sitekey: '6Ld-hSAsAAAAAKnYSDAgh9xYD6jYMrT9mfbOeuaZ',
                    callback: (token) => {
                        this.response = token      // aqui ficas com o token
                    },
                    'expired-callback': () => {
                        this.response = ''
                    }
                })
            })
        }
    },

    computed: {
        ...mapGetters(['AppCMSApi', 'AppMessage', 'AppStarted']),
    },

    methods: {

        ...mapActions(['setMessage', 'setPID', 'setShareURL']),

        setVars() {
            this.containerSelector = this.$refs.grid;
            this.containerSelector.style.transform = 'scale(1)';
            this.rowClass = "row"
            this.rowSelector = "." + this.rowClass;
            this.imageClass = "sliderImage";
            this.imageSelector = "." + this.imageClass;
            this.imgURLArray = this.images;
            this.imgURLArrayLength = this.imgURLArray ? this.imgURLArray.length : -1;
            this.rowNum = this.imageRows.length;
            this.imgNum = this.imageRows[0].length;
            this.useInertia = true;
            this.useCenterGrid = false;
            this.rows;
            this.imgMidIndex;
            this.rowMidIndex;
            this.rowArray = [];
            this.imgRep = [];
            this.boxWidth;
            this.boxHeight;
            this.boxWidthBig;
            this.boxHeightBig;
            this.gutter;
            this.horizSpacing;
            this.vertSpacing;
            this.horizOffset;
            this.vertOffset;
            this.winMidX;
            this.winMidY;
            this.lastCenteredElem;
            this.sliderImgIdx;
            this.touchPoints = { x: 0, y: 0 };
        },

        onMasktouchStart(e) {
            var cursorX = e.changedTouches[0].pageX;
            var cursorY = e.changedTouches[0].pageY;
            if (cursorX) this.touchPoints.x = cursorX;
            if (cursorY) this.touchPoints.y = cursorY;
        },

        onClickMask(e) {
            var cursorX = e.pageX || e.changedTouches[0].pageX;
            var cursorY = e.pageY || e.changedTouches[0].pageY;
            var view = this;
            var distanceX;
            var distanceY;

            if (e.changedTouches) {
                distanceX = Math.abs(cursorX - this.touchPoints.x);
                distanceY = Math.abs(cursorY - this.touchPoints.y);
                if (distanceX > 30 || distanceY > 30) return;
            }

            document.querySelectorAll('.sliderImage').forEach((div) => {
                let bounds = div.getBoundingClientRect();
                if (cursorX > bounds.x && cursorX < bounds.x + bounds.width && cursorY > bounds.y && cursorY < bounds.y + bounds.height) {
                    if (!div.classList.contains('unclickable')) {
                        view.chooseElement(div);
                    }
                }
            })
        },

        createImageGrid() {

            for (let y = 0; y < this.rowNum; y++) {
                let row = document.querySelectorAll('.row')[y];
                this.imgRep.push(gsap.utils.toArray(row.querySelectorAll(this.imageSelector)));
            }

            this.rows = document.querySelectorAll(this.rowSelector);
            this.imgMidIndex = Math.floor(this.imgNum / 2),
                this.rowMidIndex = Math.floor(this.rowNum / 2);
        },

        createDraggable() {
            let options = {
                trigger: ".mask",
                dragResistance: 0.7,
                resistance: 400,
                maxDuration: 1,
                onDrag: this.updateCenterElem,
            }

            if (this.useInertia) {
                options.inertia = true;
                options.onThrowUpdate = this.updateCenterElem;

                if (this.useCenterGrid) {
                    options.onThrowComplete = this.centerGrid;
                }
            } else if (this.useCenterGrid) { // No inertia
                options.onDragEnd = this.centerGrid;
            }

            return Draggable.create(this.$refs.grid, options);
        },

        moveArrayIndex(array, oldIndex, newIndex) {
            if (newIndex >= array.length) {
                newIndex = array.length - 1;
            }
            array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
            return array;
        },

        checkPositions(elem) {
            // Find the location in our array of the element
            let rowIndex = -1,
                imgIndex = -1;

            this.imgRep.forEach((row, i) => {
                row.forEach((img, j) => {
                    if (elem.isSameNode(img)) {
                        rowIndex = i;
                        imgIndex = j;
                    }
                });
            });

            // Element not found, return
            if (rowIndex === -1)
                return;

            // Reposition elements as necessary so that our element is in the center
            // Reposition the rows as necessary
            if (rowIndex < this.rowMidIndex) {
                for (let i = rowIndex; i < this.rowMidIndex; i++) {
                    // Update the row's actual position
                    let rowY = gsap.getProperty(this.rowArray[0], "y");

                    if (this.rowArray.length % 2 === 1) { // Odd number of rows means we have to handle offset
                        let row = this.rowArray[this.rowArray.length - 1];
                        if (row.dataset.offset === "true") {
                            gsap.set(row, { y: rowY - this.gutter - this.boxHeight, x: "+=" + this.boxWidth / 2 });
                            row.dataset.offset = "false";
                        } else {
                            gsap.set(row, { y: rowY - this.gutter - this.boxHeight, x: "-=" + this.boxWidth / 2 });
                            row.dataset.offset = "true";
                        }
                    } else { // Equal number of rows; don't have to handle offset
                        gsap.set(this.rowArray[this.rowArray.length - 1], { y: rowY - this.gutter - this.boxHeight });
                    }

                    // Update our representations
                    this.moveArrayIndex(this.imgRep, this.imgRep.length - 1, 0);
                    this.moveArrayIndex(this.rowArray, this.rowArray.length - 1, 0);
                }
            } else if (rowIndex > this.rowMidIndex) {
                for (let i = this.rowMidIndex; i < rowIndex; i++) {
                    // Update the row's actual position
                    let rowY = gsap.getProperty(this.rowArray[this.rowArray.length - 1], "y");

                    if (this.rowArray.length % 2 === 1) { // Odd number of rows means we have to handle offset
                        let row = this.rowArray[0];
                        if (row.dataset.offset === "true") {
                            gsap.set(row, { y: rowY + this.gutter + this.boxHeight, x: "-=" + this.boxWidth / 2 });
                            row.dataset.offset = "false";
                        } else {
                            gsap.set(row, { y: rowY + this.gutter + this.boxHeight, x: "+=" + this.boxWidth / 2 });
                            row.dataset.offset = "true";
                        }
                    } else { // Equal number of rows; don't have to handle offset
                        gsap.set(this.rowArray[0], { y: rowY + this.gutter + this.boxHeight });
                    }

                    // Update our representations
                    this.moveArrayIndex(this.imgRep, 0, this.imgRep.length - 1);
                    this.moveArrayIndex(this.rowArray, 0, this.rowArray.length - 1);
                }
            }


            // Reposition the images as necessary
            if (imgIndex < this.imgMidIndex) {
                for (let rowNum = 0; rowNum < this.rows.length; rowNum++) { // Do it for every row
                    let row = this.imgRep[rowNum];

                    for (let i = imgIndex; i < this.imgMidIndex; i++) {
                        // Update the images's actual position
                        let imgX = gsap.getProperty(row[0], "x");

                        gsap.set(row[row.length - 1], { x: imgX - this.gutter - this.boxWidth });

                        // Update our representation
                        this.moveArrayIndex(row, row.length - 1, 0);
                    }
                }
            } else if (imgIndex > this.imgMidIndex) {
                for (let rowNum = 0; rowNum < this.rows.length; rowNum++) { // Do it for every row
                    let row = this.imgRep[rowNum];

                    for (let i = this.imgMidIndex; i < imgIndex; i++) {
                        // Update the images's actual position
                        let imgX = gsap.getProperty(row[this.imgNum - 1], "x");

                        gsap.set(row[0], { x: imgX + this.gutter + this.boxWidth });

                        // Update our representation
                        this.moveArrayIndex(row, 0, row.length - 1);
                    }
                }
            }
        },

        centerGrid() {
            let bcr = this.lastCenteredElem.getBoundingClientRect();
            let midX = bcr.x + bcr.width / 2;
            let midY = bcr.y + bcr.height / 2;

            let x = this.winMidX - midX;
            let y = this.winMidY - midY;

            gsap.to(this.containerSelector, {
                ease: "sine.inOut",
                duration: 0.7,
                x: "+=" + x,
                y: "+=" + y
            });
        },

        updateCenterElem() {
            var view = this;
            let elems = document.elementsFromPoint(this.winMidX, this.winMidY);
            elems.forEach(elem => {
                if (elem.matches(this.imageSelector) && !this.lastCenteredElem.isSameNode(elem)) {
                    view.lastCenteredElem = elem;
                    view.checkPositions(view.lastCenteredElem);
                }
            });
        },

        resize() {
            this.winMidX = window.innerWidth / 2;
            this.winMidY = window.innerHeight / 2;
            this.boxWidth = 264;
            this.boxHeight = 352;
            this.boxWidthBig = 490;
            this.boxHeightBig = 653;
            this.gutter = 110;
            this.sliderGutter = 88;

            if (window.innerWidth < 768) {
                this.gutter = 30;
            }

            if (window.innerWidth < 580) {
                this.boxWidthBig = 280;
                this.boxHeightBig = 373;
                this.sliderGutter = 50;
            }

            this.horizSpacing = this.boxWidth + this.gutter;
            this.vertSpacing = this.boxHeight + this.gutter;
            this.horizOffset = -(this.imgMidIndex * this.horizSpacing + this.boxWidth / 2) + this.winMidX;
            this.vertOffset = -(this.rowMidIndex * this.vertSpacing + this.boxHeight / 2) + this.winMidY;
            var view = this;


            // Reset our container and rows
            gsap.set(this.containerSelector, { x: 0, y: 0 });

            this.rows.forEach(function (row, i) {
                gsap.set(row, {
                    attr: {
                        "data-offset": function () {
                            if (i % 2 === 0) return false;
                            else return true;
                        }
                    },
                    x: function () {
                        if (i % 2 === 0)
                            return view.horizOffset;
                        else
                            return view.horizOffset - view.boxWidth / 2;
                    },
                    y: function () {
                        return i * view.vertSpacing + view.vertOffset;
                    },
                });

                gsap.set(row.querySelectorAll(view.imageSelector), {
                    width: view.boxWidth,
                    height: view.boxHeight,
                    x: function (index) {
                        return index * view.horizSpacing;
                    }
                });

                // Update our representation of the rows
                view.rowArray[i] = row;
            });
        },

        chooseElement(chosenDiv) {
            var view = this;

            chosenDiv.style.width = this.boxWidthBig + 'px';
            chosenDiv.style.height = this.boxHeightBig + 'px';

            let bcr = chosenDiv.getBoundingClientRect();
            let midX = bcr.x + bcr.width / 2;
            let midY = bcr.y + bcr.height / 2;
            let x = this.winMidX - midX;
            let y = this.winMidY - midY;

            document.querySelectorAll('.sliderImage').forEach((div) => {
                if (div != chosenDiv) div.classList.add('hide');
            });

            this.$refs.pagtotal.innerHTML = this.imageSlider.length;
            chosenDiv.querySelector('img').classList.add('selected');

            this.$refs.mask.classList.add('block');
            this.centerSlider(chosenDiv.getAttribute('iid'));

            gsap.to(this.containerSelector, {
                ease: "sine.inOut", duration: 0.4, x: "+=" + x, y: "+=" + y, onComplete: function () {
                    view.$refs.slider.classList.add('show');
                    view.$refs.grid.classList.add('hide');
                }
            });

            if (window.innerWidth < 768) {
                document.getElementById('footer').classList.remove('hide');
                document.getElementById('footer').classList.add('removesocial');
            }

            this.$refs.forml.classList.add('show');
            this.$refs.formr.classList.add('show');
            this.$refs.balloon.classList.add('show');

            this.setPID({ pid: chosenDiv.getAttribute('iid') });
            this.animateFrames()
        },

        centerSlider(iid) {
            var view = this;
            var sliderImages = this.$refs.sliderImages;
            var chosenSlider = sliderImages.querySelector('.img' + iid);
            chosenSlider.classList.add('selected');
            var offset = (window.innerWidth / 2 - chosenSlider.getBoundingClientRect().x) - this.boxWidthBig / 2;
            gsap.to(sliderImages, { ease: "sine.inOut", duration: 0, x: "+=" + offset });

            sliderImages.querySelectorAll('.sliderimg').forEach((div, idx) => {
                if (div == chosenSlider) {
                    view.sliderImgIdx = idx + 1;
                    view.$refs.pagcurrent.innerHTML = idx + 1;
                }
            });

            this.$refs.navl.classList.remove('disabled');
            this.$refs.navr.classList.remove('disabled');

            if (this.sliderImgIdx == 1) this.$refs.navl.classList.add('disabled');
            if (this.sliderImgIdx == this.imageSlider.length) this.$refs.navr.classList.add('disabled');
        },

        moveSliderDirection(dir) {

            if (dir == 'r') {
                this.sliderImgIdx++;
            }

            if (dir == 'l') {
                this.sliderImgIdx--;
            }

            var sliderImages = this.$refs.sliderImages;
            sliderImages.classList.add('transitions');
            var chosenSlider = sliderImages.querySelector('.img' + this.sliderImgIdx);

            sliderImages.querySelectorAll('.sliderimg').forEach((div) => {
                div.classList.remove('selected');
            });
            chosenSlider.classList.add('selected');

            var offset;
            var mobileOffset = window.innerWidth < 768 ? 83 : 0;

            if (dir == 'r') {
                offset = -chosenSlider.offsetLeft - chosenSlider.getBoundingClientRect().width / 2 + this.sliderGutter - mobileOffset;
            }

            if (dir == 'l') {
                offset = -chosenSlider.offsetLeft - chosenSlider.getBoundingClientRect().width / 2 - this.sliderGutter + mobileOffset;
            }

            gsap.to(sliderImages, { ease: "sine.inOut", duration: 0, x: offset });
            this.$refs.pagcurrent.innerHTML = this.sliderImgIdx;

            this.$refs.navl.classList.remove('disabled');
            this.$refs.navr.classList.remove('disabled');

            if (this.sliderImgIdx == 1) this.$refs.navl.classList.add('disabled');
            if (this.sliderImgIdx == this.imageSlider.length) this.$refs.navr.classList.add('disabled');
        },

        finalChoose() {
            var view = this;

            this.$refs.sliderImages.classList.remove('transitions');
            //this.$refs.ball1.classList.remove('show');
            this.$refs.balloon.classList.add('hide');
            this.$refs.nav.classList.add('hide');
            this.$refs.pagination.classList.add('hide');
            this.animateFrames()

            this.$refs.sliderImages.querySelectorAll('.sliderimg').forEach((div) => {
                if (!div.classList.contains('selected')) {
                    div.classList.add('hide');
                }
            });

            this.$refs.form.classList.add('show');

            /*setTimeout(function () {
                view.$refs.ball3.classList.add('show');
                view.$refs.ball4.classList.add('show');
                view.$refs.ball5.classList.add('show');
            }, 300);*/

            if (window.innerWidth > 768) {
                gsap.to(this.$refs.sliderImages, { ease: "sine.inOut", duration: .3, x: '-=' + this.boxWidthBig / 2 });
                gsap.to(this.$refs.form, { ease: "sine.inOut", duration: .3, x: '+=' + this.boxWidthBig / 2 });
            } else {
                this.$refs.form.classList.add('infront');
                this.$refs.sliderImages.classList.add('hide');
            }

            this.$refs.sliderImages.classList.add('block');
            this.$refs.form.classList.add('show');
        },

        submitPostal(e) {
            e.preventDefault();
            var view = this;
            let title = this.$refs.inputtitle.value;
            let msg = this.$refs.inputmsg.value;
            let remetente = this.$refs.inputremetente.value;

            if (title.length == 0) {
                this.$refs.submiterror.innerHTML = "Preenche o título";
                return;
            }

            if (msg.length == 0) {
                this.$refs.submiterror.innerHTML = "Preenche a tua mensagem";
                return;
            }

            if (remetente.length == 0) {
                this.$refs.submiterror.innerHTML = "Preenche o remetente";
                return;
            }

           /* if (!this.response) {
                this.$refs.submiterror.innerHTML = "Captcha inválido";
                return;
            }*/

            this.$refs.submiterror.innerHTML = "";
            this.$refs.submitloader.classList.add('show');
            this.setMessage({ title: title, msg: msg, rem: remetente, uniqueid: this.uid() });
            //this.addParticipation();
            this.$router.push({ path: 'finish' })
            this.animateFrames();
        },

        onInputblur() {
            this.$refs.submiterror.innerHTML = "";
        },

        async addParticipation() {
            const response = await axios.post(this.AppCMSApi + '/addpart', {
                title: this.AppMessage.title,
                msg: this.AppMessage.msg,
                sender: this.AppMessage.rem,
                vidid: this.AppMessage.pid,
                uniqueid: this.AppMessage.uniqueid,
                cod: this.AppMessage.cod,
            });

            this.setShareURL({ url: response.data.link });
            this.$router.push({ path: 'finish' })
        },

        uid() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        }
    }
}
</script>

<style lang="scss">
#choose {
    overflow: hidden;
    display: block;
    position: relative;
    z-index: 1;
    $anime: all 1s cubic-bezier(.6, 1.43, .57, 1.01);

    .frames {
        position: absolute;
        width: 100%;
        height: 100%;

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }

    .grid-container {
        transition: $anime;
    }

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
            transform: translateX(-100%) scale(1.3);
            opacity: 0;
        }

        &.r {
            right: 0;
            transform-origin: right center;
            transform: translateX(100%) scale(1.3);
            opacity: 0;
        }

        &.show {
            &.l {
                transform: translateX(0%) scale(1);
                opacity: 1;
            }

            &.r {
                transform: translateX(0%) scale(1);
                opacity: 1;
            }
        }
    }

    .balloon {
        position: fixed;
        left: 50%;
        transform: translate(calc(-50% + 310px), calc(-50% + 160px)) scale(0);
        top: 50%;
        z-index: 10000;
        transform-origin: center;
        transition: $anime;
        cursor: pointer;

        &.hide {
            display: none;
        }

        &.show {
            transform: translate(calc(-50% + 310px), calc(-50% + 160px)) scale(1);
        }

        p {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            text-transform: uppercase;
            font-family: 'betclic-back-italic';
            font-size: 24px;
            width: 100%;
            text-align: center;
            text-shadow: -2px 2px 0px #A0A0A080;
        }
    }

    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2000;

        &.block {
            pointer-events: none;
        }

        &.hide {
            display: none;
        }
    }

    .grid {
        position: relative;
        z-index: 5;

        &.hide {
            display: none;
        }

        .row {
            position: absolute;

            .sliderImage {
                position: absolute;
                left: 0;
                top: 0;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                user-select: none;
                transition: opacity .3s;

                img {
                    transition: all .5s;
                    width: 264px;

                    &.selected {
                        width: 490px;

                        @media only screen and (max-width: 580px) {
                            width: 280px;
                        }
                    }
                }

                &.hide {
                    opacity: 0;
                    pointer-events: none;
                }
            }
        }
    }

    .slider {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2500;
        opacity: 0;
        pointer-events: none;

        .images {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(0, -50%);
            display: flex;
            z-index: 2;
            pointer-events: none;

            &.block {
                pointer-events: none;
            }

            &.hide {
                display: none;
            }

            img {
                margin: 88px;
                width: 264px;
                align-self: center;
                opacity: 0;
                transition: all .3s;
                filter: blur(8px);
                -webkit-filter: blur(8px);

                &.selected {
                    width: 490px;
                    margin: 50px;
                    transition: none;
                    filter: blur(0px);
                    -webkit-filter: blur(0px);

                    @media only screen and (max-width: 580px) {
                        width: 280px;
                        margin: 10px;
                    }
                }

                &.hide {
                    opacity: 0 !important;
                }

                @media only screen and (max-width: 580px) {
                    margin: 50px;
                }
            }

            &.transitions {
                transition: all .3s;

                img {
                    transition: all .3s;

                    &.selected {
                        transition: all .3s;
                    }
                }
            }
        }

        .nav {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(calc(-50% + 550px), -50%);
            transition: opacity .3s;
            z-index: 10;

            &.hide {
                opacity: 0;
                pointer-events: none;
            }

            .go {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60px;
                height: 60px;
                margin: 10px 0;
                cursor: pointer;
                box-shadow: 0px 4px 0px #7B1920;

                &.disabled {
                    opacity: .3;
                    pointer-events: none;
                }

                &.r {
                    margin-left: 15px;

                    svg {
                        transform: scale(-1);
                    }


                    @media only screen and (max-width: 580px) {
                        margin-left: 0;
                    }
                }

                &.l {

                    @media only screen and (max-width: 580px) {
                        transform: rotate(0deg);
                    }
                }

                &:hover {
                    box-shadow: none;

                    svg {
                        .rect {
                            fill: #fff;
                        }

                        .path {
                            stroke: #F40009;
                        }
                    }
                }

                @media only screen and (max-width: 580px) {
                    margin: 0;
                    transform: rotate(180deg);
                    width: 50px;
                    height: 42px;

                    svg {
                        transform: scale(.7) !important;
                    }
                }
            }

            @media only screen and (max-width: 580px) {
                transform: translate(-50%, calc(-50% + 234px)) rotate(180deg);
                z-index: 10;
                display: flex;
                width: 70%;
                justify-content: space-between;
            }
        }

        &.show {
            opacity: 1;
            pointer-events: all;

            .images {
                img {
                    opacity: .3;

                    &.selected {
                        opacity: 1;
                    }
                }

            }
        }

        .pagination {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(calc(-50% - 510px), -50%);
            font-family: 'betclic-back-italic';
            color: #fff;
            width: 120px;
            height: 120px;
            transition: opacity .3s;
            z-index: 10;

            @media only screen and (max-width: 580px) {
                width: 40px;
                height: 50px;
                transform: translate(-50%, calc(-50% + 238px));
                z-index: 1111;
            }

            svg {
                @media only screen and (max-width: 580px) {
                    width: 35px;
                    height: 35px;
                }
            }

            &.hide {
                opacity: 0;
                pointer-events: none;
            }

            .current {
                position: absolute;
                left: 35px;
                top: 0;
                font-size: 48px;

                @media only screen and (max-width: 580px) {
                    font-size: 18px;
                    left: 0;
                }
            }

            .total {
                position: absolute;
                right: -73px;
                bottom: -29px;
                font-size: 96px;

                @media only screen and (max-width: 580px) {
                    font-size: 36px;
                    right: 0;
                    bottom: 0;
                }
            }
        }

        .form {
            position: absolute;
            left: 50%;
            top: 50%;
            background: #fff;
            transform: translate(-50%, -50%);
            z-index: 1;
            opacity: 0;
            pointer-events: none;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 0px;
                height: 100%;
                background: #fff;
                transform: translateX(-100%);
                transition: all .3s;

                @media only screen and (max-width: 580px) {
                    display: none;
                }
            }

            &.show {
                &::before {
                    width: 50px;
                }
            }

            .padd {
                padding: 56px 50px;

                @media only screen and (max-width: 580px) {
                    padding: 20px;
                }

                iframe {
                    @media only screen and (max-width: 580px) {
                        transform: scale(0.8);
                        transform-origin: left;
                    }
                }
            }

            &.show {
                opacity: 1;
                pointer-events: all;
            }

            input[type="text"],
            textarea {
                border: none;
                outline: none;
                border-bottom: 1px dashed #000;
                font-family: 'betclic-regular';
                font-size: 18px;
                padding-bottom: 10px;
                margin-bottom: 35px;
                width: 93%;
                resize: none;

                &::placeholder {
                    color: #000;
                }

                @media only screen and (max-width: 580px) {
                    font-size: 14px;
                    margin-bottom: 20px;
                }
            }

            textarea {
                height: 190px;

                @media only screen and (max-width: 580px) {
                    height: 114px;
                }
            }

            &.infront {
                z-index: 2000;
                opacity: 1;

                @media only screen and (max-width: 580px) {
                    padding-bottom: 70px;
                }
            }

            a {
                width: 100%;
                height: 64px;
                text-transform: uppercase;
                font-family: 'betclic-regular';
                color: #fff;
                text-decoration: none;
                font-size: 19.28px;
                font-style: italic;
                font-weight: bold;
                display: flex;
                align-items: center;
                margin-top: 27px;
                position: relative;

                span {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                }

                svg {
                    fill-opacity: .95;
                    ;
                }

                &:hover {
                    svg {
                        fill-opacity: 1;
                        ;
                    }
                }

                &.down {
                    svg {
                        fill-opacity: 1;
                        ;
                    }
                }

                @media only screen and (max-width: 768px) {
                    margin: 15px auto 0 auto;
                }

                @media only screen and (max-width: 580px) {
                    height: 38px;
                    font-size: 14px;
                    margin: 20px auto 0 auto;
                }
            }

            .error {
                position: absolute;
                left: 50%;
                bottom: 19px;
                transform: translateX(-50%);
                color: #F40009;
                font-family: 'betclic-regular';
                font-size: 15px;

                @media only screen and (max-width: 580px) {
                    font-size: 12px;
                    bottom: 15px;
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
                display: none;

                &.show {
                    display: block;
                }

                @media only screen and (max-width: 580px) {
                    bottom: 15px;
                    width: 100px;
                }
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

    }

    &.v-enter-from {
        .grid-container {
            opacity: 0;
            transform: scale(0.5);
        }
    }

    &.v-enter-to {
        .grid-container {
            transform: scale(1);
            opacity: 1;
        }
    }

    &.v-leave-from {
        .grid-container {
            transform: scale(1);
        }
    }

    &.v-leave-to {
        .grid-container {
            transform: scale(0);
        }
    }

    &.v-enter-active,
    &.v-leave-active {

        .grid-container {
            transition: $anime;
        }

        @media only screen and (max-width: 580px) {

            .grid-container {
                transition: none;
            }
        }
    }

}
</style>