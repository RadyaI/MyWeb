<template>
    <div>
        <div class="container">
            <main>
                <Loading v-if="!state.stopSlide" />
                <div class="text-bg">
                    <h2>DEVELOPER</h2>
                    <h3>Radya.</h3>
                    <div class="bg-1">
                        <div class="card">
                            <img :class="{ swing: state.img.swingImg }" :src="state.img.homeAboutMe" alt="about me"
                                @mouseover="handleMouseOver('Want to know about me?'), play(), state.img.swingImg = true"
                                @mouseleave="handleMouseLeave(), stop(), state.img.swingImg = false">
                        </div>
                        <div class="card">
                            <div class="stack">
                                <img :src="jsIcon" alt="js" @mouseover="handleMouseOver('Javascript'), play()"
                                    @mouseleave="handleMouseLeave(), stop()">
                            </div>
                            <div class="stack">
                                <img :src="nuxtIcon" alt="nuxt" @mouseover="handleMouseOver('I love nuxt'), play()"
                                    @mouseleave="handleMouseLeave(), stop()">
                            </div>
                            <div class="stack">
                                <img :src="firebaseIcon" alt="firebase" @mouseover="handleMouseOver('Firebase'), play()"
                                    @mouseleave="handleMouseLeave(), stop()">
                            </div>
                        </div>
                        <div class="card">
                            <img :src="state.img.pcDesk" alt="" @mouseover="animatePc()" @mouseleave="stopAnimatePc()">
                        </div>
                    </div>
                    <div class="bg-2" v-if="state.stopSlide">
                        <img :src="state.img.homeDefault"
                            :class="{ 'img-bounce': state.img.bounceImgDefault, 'flip': state.logoBounce || state.blogUp }" alt=""
                            @mouseover="handleMouseOver(`Hi I'm Radya`), play()"
                            @mouseleave="handleMouseLeave(), stop()">
                        <div class="dialog-right" v-if="state.dialog">
                            <p>{{ state.dialog }}</p>
                        </div>
                    </div>
                    <div class="bg-3">
                        <div class="medsos">
                            <div class="row">
                                <div class="logo ig" :class="{ 'bounce': state.logoBounce == 'ig' }"
                                    @mouseover="logoHandle('Follow me on Instagram :)', 'ig')"
                                    @mouseleave="stopLogoHandle()"><i class="bi bi-instagram"></i></div>
                                <div class="logo tiktok" :class="{ 'bounce': state.logoBounce == 'tiktok' }"
                                    @mouseover="logoHandle('I make coding timelapse videos', 'tiktok')"
                                    @mouseleave="stopLogoHandle()"><i class="bi bi-tiktok"></i></div>
                                <div class="logo github" :class="{ 'bounce': state.logoBounce == 'github' }"
                                    @mouseover="logoHandle(`Don't judge my GH stats ^^`, 'github')"
                                    @mouseleave="stopLogoHandle()"><i class="bi bi-github"></i></div>
                            </div>
                            <div class="wood">
                                <div class="wood2"></div>
                            </div>
                        </div>
                        <div class="blog" :class="{ 'blogUp': state.blogUp }">
                            <div class="blog-bg">
                                <div class="text" @mouseover="blogHandle(), play()"
                                    @mouseleave="stopBlogHandle(), stop()">
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
import popUp1 from '@/assets/sound/popUp1.mp3'

import homeDefaultImg from '@/public/img/homeDefault.png'
import homeHoverImg from '@/public/img/homeHover.png'
import homeAboutMe from '@/public/img/homeAboutMe.png'

import nuxtIcon from '../public/img/nuxt.png'
import jsIcon from '../public/img/javascript.png'
import firebaseIcon from '../public/img/firebase.png'


import pcDesk from '@/public/gif/pcDesk.gif'
import pcDeskThumb from '@/public/gif/pcDeskThumb.png'


import { useSound } from '@vueuse/sound'
import { onMounted, reactive } from 'vue';
import Loading from '../components/loading.vue'

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

const state = reactive({
    title: "Radya",
    dialog: null,
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
}

function stopBlogHandle() {
    state.blogUp = false
    state.dialog = null
}

onMounted(() => {
    setTimeout(() => {
        state.stopSlide = true
    }, 1200);
})

</script>

<style>
@import url('../assets/style.css');
</style>