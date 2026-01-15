<script lang="ts">
export default {
    data() {
        return {
            hamburgerOpen: false,
        }
    },
}
</script>

<template>
    <!-- TODO - Change hamburger icon. -->
    <nav class="flex flex-row w-full h-31.25 bg-bg-db-light text-text select-none">
        <a href="#" class="text-nav-link w-58.75 flex justify-center items-center text-[2.5rem]">LOGO</a>
        <div class="md:flex flex-row hidden flex-1">
            <a href="#" class="text-nav-link flex-1 flex justify-center items-center text-[2.5rem]">BTN1</a>
            <a href="#" class="text-nav-link flex-1 flex justify-center items-center text-[2.5rem]">BTN2</a>
            <a href="#" class="text-nav-link flex-1 flex justify-center items-center text-[2.5rem]">BTN3</a>
            <a href="#" class="text-nav-link flex-1 flex justify-center items-center text-[2.5rem]">BTN4</a>
        </div>
        <button class="text-nav-link text-[2.5rem] md:hidden inline-block ml-auto w-31.25">☰</button>
    </nav>
</template>

<style scoped></style>
