<template>
    <div>
        <div class="bg"></div>
    </div>
</template>

<style scoped>
.bg {
    z-index: 999;
    width: 100wh;
    height: 100vh;
    background-color: white;
    margin-left: 1300px;
    animation: slide 1s;
}

@keyframes slide {
    0% {
        margin-left: 0px;
    }

    50% {
        margin-left: 0px;
    }

    100% {
        margin-left: 1300px;
    }
}
</style>