<template>
    <div>
        <div class="container">
            <div class="text-bg">
                <h2>DEVELOPER</h2>
                <h3>Radya.</h3>
                <div class="bg-1"></div>
                <div class="bg-2">
                    <img :src="state.img.homeDefault" :class="{ 'img-bounce': state.img.bounceImgDefault }" alt=""
                        @mouseover="handleMouseOver(), play()" @mouseleave="handleMouseLeave(), stop()">
                    <div class="dialog-right" v-if="state.dialog">
                        <p>{{state.dialog}}</p>
                    </div>
                </div>
                <div class="bg-3"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import popUp1 from '@/assets/sound/popUp1.mp3'
import popIcon from '@/assets/sound/popUp2.mp3'

import homeDefaultImg from '@/assets/img/homeDefault.png'
import homeHoverImg from '@/assets/img/homeHover.png'

import { useSound } from '@vueuse/sound'
import { reactive } from 'vue';

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
        homeDefault: homeDefaultImg
    }
})

const { play, stop } = useSound(popUp1)

function handleMouseOver() {
    state.img.homeDefault = homeHoverImg
    state.img.bounceImgDefault = true
    state.dialog = "Hi aku Radya!"
}

function handleMouseLeave() {
    state.img.homeDefault = homeDefaultImg
    state.img.bounceImgDefault = false
    state.dialog = null
}



</script>

<style>
@import url('../assets/style.css');
</style>