<template>
    <div>
        <div class="container">
            <main>
                <Loading v-if="!state.stopSlide" />
                <div class="text-bg">
                    <h2>DEVELOPER</h2>
                    <h3>Radya.</h3>
                    <div class="bg-1" v-if="state.stopSlide">
                        <div class="card animate__animated animate__bounceInDown"
                            :class="{ 'animate__bounceOutUp': state.onSwitch }"> <img
                                :class="{ 'swing': state.img.swingImg }" :src="state.img.homeAboutMe" alt="about me"
                                @click="switchPage('https://radya.fun')"
                                @mouseover="handleMouseOver('Want to know about me?'), play(), state.img.swingImg = true"
                                @mouseleave="handleMouseLeave(), stop(), state.img.swingImg = false">
                        </div>
                        <div class="card animate__animated animate__bounceInLeft"
                            :class="{ 'animate__bounceOutLeft': state.onSwitch }">
                            <div class="stack"
                                @click="toPage('https://developer.mozilla.org/en-US/docs/Web/JavaScript')">
                                <img :src="jsIcon" alt="js" @mouseover="handleMouseOver('Just javascript'), play()"
                                    @mouseleave="handleMouseLeave(), stop()">
                            </div>
                            <div class="stack" @click="toPage('https://nuxt.com')">
                                <img :src="nuxtIcon" alt="nuxt" @mouseover="handleMouseOver('I love nuxt'), play()"
                                    @mouseleave="handleMouseLeave(), stop()">
                            </div>
                            <div class="stack" @click="toPage('https://firebase.com')">
                                <img :src="firebaseIcon" alt="firebase"
                                    @mouseover="handleMouseOver('I like using NOSQL database'), play()"
                                    @mouseleave="handleMouseLeave(), stop()">
                            </div>
                        </div>
                        <div class="card animate__animated animate__bounceInUp"
                            :class="{ 'animate__bounceOutDown': state.onSwitch }">
                            <img :src="state.img.pcDesk" alt="" @mouseover="animatePc()" @mouseleave="stopAnimatePc()"
                                @click="toWork()">
                        </div>
                    </div>
                    <div class="bg-2" v-if="state.stopSlide">
                        <span class="animate__animated" :class="{ 'animate__bounceOutDown': state.onSwitch }">
                            <img :src="state.img.homeDefault"
                                :class="{ 'img-bounce': state.img.bounceImgDefault, 'flip': state.logoBounce || state.blogUp }"
                                alt="" @mouseover="handleMouseOver(`Hi I'm Radya`), play()"
                                @mouseleave="handleMouseLeave(), stop()">
                        </span>
                        <div class="dialog-right animate__animated"
                            :class="{ 'animate__bounceOutDown': state.onSwitch }" v-if="state.dialog">
                            <p>{{ state.dialog }}</p>
                        </div>
                    </div>
                    <div class="bg-3" v-if="state.stopSlide">
                        <div class="medsos">
                            <div class="row animate__animated animate__bounceInDown"
                                :class="{ 'animate__bounceOutUp': state.onSwitch }">
                                <div class="logo ig" :class="{ 'jump': state.logoBounce == 'ig' }"
                                    @click="toPage('https://instagram.com/radyaif')"
                                    @mouseenter="logoHandle('Follow me on Instagram :)', 'ig')"
                                    @mouseleave="stopLogoHandle()"><i class="bi bi-instagram"></i></div>
                                <div class="logo tiktok" :class="{ 'jump': state.logoBounce == 'tiktok' }"
                                    @click="toPage('https://tiktok.com/@r4dy.a')"
                                    @mouseenter="logoHandle('I make coding timelapse videos', 'tiktok')"
                                    @mouseleave="stopLogoHandle()"><i class="bi bi-tiktok"></i></div>
                                <div class="logo github" :class="{ 'jump': state.logoBounce == 'github' }"
                                    @click="toPage('https://github.com/RadyaI')"
                                    @mouseenter="logoHandle(`Don't judge my GH stats ^^`, 'github')"
                                    @mouseleave="stopLogoHandle()"><i class="bi bi-github"></i></div>
                            </div>
                            <div class="wood animate__animated animate__bounceInRight"
                                :class="{ 'animate__bounceOutRight': state.onSwitch }">
                                <div class="wood2"></div>
                            </div>
                        </div>
                        <div class="cover animate__animated animate__bounceInUp"
                            :class="{ 'animate__bounceOutDown': state.onSwitch }">
                            <div class="blog" :class="{ 'blogUp': state.blogUp, }"
                                @click="toPage('https://medium.com/@radyaiftikhar')">
                                <div class="blog-bg">
                                    <div class="text" @mouseover="blogHandle()" @mouseleave="stopBlogHandle()">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { useSound } from '@vueuse/sound'
import { onMounted, reactive } from 'vue'
import Loading from '@/components/loading.vue'
import { useRouter } from 'vue-router'
import 'animate.css'

import popUp1 from '@/assets/sound/popUp1.mp3'

import homeDefaultImg from '@/public/img/homeDefault.png'
import homeHoverImg from '@/public/img/homeHover.png'
import homeAboutMe from '@/public/img/homeAboutMe.png'

import nuxtIcon from '@/public/img/nuxt.png'
import jsIcon from '@/public/img/javascript.png'
import firebaseIcon from '@/public/img/firebase.png'


import pcDesk from '@/public/gif/pcDesk.gif'
import pcDeskThumb from '@/public/gif/pcDeskThumb.png'


useHead({
    title: 'Radya - Home',
    link: [
        { rel: 'icon', type: 'image/png', href: homeAboutMe }
    ],
    meta: [
        { name: 'description', content: 'Hi!, Welcome to radya personal website' },
        { name: 'keyword', content: "radya, personalweb" },
        { name: 'author', content: "Muhammad Radya I" },
        { name: 'robots', content: "index, allow" }
    ]
})

const router = useRouter()

const state = reactive({
    title: "Radya",
    dialog: null,
    onSwitch: false,
    img: {
        swingImg: true,
        bounceImgDefault: false,
        homeDefault: homeDefaultImg,
        homeAboutMe: homeAboutMe,
        pcDesk: pcDeskThumb
    }
})

const { play, stop } = useSound(popUp1)

function handleMouseOver(msg) {
    state.img.homeDefault = homeHoverImg
    state.img.bounceImgDefault = true
    state.dialog = msg
}

function handleMouseLeave() {
    state.img.homeDefault = homeDefaultImg
    state.img.bounceImgDefault = false
    state.dialog = null
}

function animatePc() {
    state.img.pcDesk = pcDesk
    state.dialog = "Want to see what I made?"
    state.img.homeDefault = homeHoverImg
    play()
}

function stopAnimatePc() {
    state.img.pcDesk = pcDeskThumb
    state.img.homeDefault = homeDefaultImg
    state.dialog = null
    stop()
}

function logoHandle(dialog, icon) {
    state.logoBounce = icon
    state.dialog = dialog
    state.img.homeDefault = homeHoverImg
    play()
}

function stopLogoHandle() {
    state.logoBounce = false
    state.dialog = null
    state.img.homeDefault = homeDefaultImg
    stop()
}

function blogHandle() {
    state.blogUp = true
    state.dialog = "I also write a blog"
    play()
}

function stopBlogHandle() {
    state.blogUp = false
    state.dialog = null
    stop()
}

function toWork() {
    switchPage('https://radya.fun')
}

function toPage(link) {
    window.open(link, '_blank')
}

function switchPage(route) {
    state.onSwitch = true
    setTimeout(() => {
        state.onSwitch = false
        location.href = route
    }, 1000);
}

onMounted(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        setTimeout(() => {
            window.location.href = 'https://radya.fun';
        }, 1000); // Redirect setelah 1 detik
    } else {
        setTimeout(() => {
            state.stopSlide = true;
        }, 500);
    }
});

</script>

<style>
@import url('../assets/style.css');
</style>