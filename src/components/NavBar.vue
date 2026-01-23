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
    <!-- SELF NOTE - I prefer using margin and padding than height and width
     properties for the layout. I use height and width for elements that require
     those specific values. I also prefer using text-align than flexbox.
     I have a preference for having margin for the entire section, and
     independant margin properties for the separate elements as needed. -->
    <!-- TODO - Change hamburger icon. -->
    <!-- TODO - Make a variable for the height of the navbar -->
    <nav class="flex flex-row w-full md:h-31.25 h-24 bg-bg-db-light text-text select-none">
        <a href="#"
            class="font-inclusive-sans md:w-58.75 w-44 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">LOGO</a>
        <div class="md:flex flex-row hidden lg:gap-0 gap-4 flex-1">
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN1</a>
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN2</a>
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN3</a>
            <a href="#"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)]">BTN4</a>
        </div>
        <button class="font-inclusive-sans text-[2.5rem] md:hidden inline-block ml-auto w-23.5">☰</button>
    </nav>
</template>

<style scoped></style>
