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
        <a href="#"
            class="font-inclusive-sans w-58.75 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">LOGO</a>
        <div class="md:flex flex-row hidden flex-1">
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN1</a>
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN2</a>
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN3</a>
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN4</a>
        </div>
        <button class="font-inclusive-sans text-[2.5rem] md:hidden inline-block ml-auto w-31.25">☰</button>
    </nav>
</template>

<style scoped></style>
