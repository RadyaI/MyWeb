<template>
    <div>
        <div class="bg"></div>
    </div>
</template>

<style scoped>
.bg {
    z-index: 99;
    width: 100wh;
    height: 100vh;
    background-color: whitesmoke;
    margin-left: 1300px;
    animation: slide 0.5s;
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