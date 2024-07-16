<template>
    <div>
        <div class="container">
            <main>
                <Loading v-if="!state.stopSlide" />
                <div class="text-bg">
                    <h2>DEVELOPER</h2>
                    <h3>Radya.</h3>
                    <div class="bg-1">
                        <div>
                            <img :src="state.img.homeAboutMe" alt="about me" @mouseover="handleMouseOver('About me?'), play()" @mouseleave="handleMouseLeave(), stop()">
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="bg-2" v-if="state.stopSlide">
                        <img :src="state.img.homeDefault" :class="{ 'img-bounce': state.img.bounceImgDefault }" alt=""
                            @mouseover="handleMouseOver('Hi! Aku Radya'), play()" @mouseleave="handleMouseLeave(), stop()">
                        <div class="dialog-right" v-if="state.dialog">
                            <p>{{ state.dialog }}</p>
                        </div>
                    </div>
                    <div class="bg-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import popUp1 from '@/assets/sound/popUp1.mp3'
import popIcon from '@/assets/sound/popUp2.mp3'

import homeDefaultImg from '@/assets/img/homeDefault.png'
import homeHoverImg from '@/assets/img/homeHover.png'
import homeAboutMe from '@/assets/img/homeAboutMe.png'

import { useSound } from '@vueuse/sound'
import { onMounted, reactive } from 'vue';
import Loading from '../components/loading.vue'

useHead({
    title: 'Radya - Home',
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
        bounceImgDefault: false,
        homeDefault: homeDefaultImg,
        homeAboutMe: homeAboutMe
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

onMounted(() => {
    setTimeout(() => {
        state.stopSlide = true
    }, 1200);
})

</script>

<style>
@import url('../assets/style.css');
</style>