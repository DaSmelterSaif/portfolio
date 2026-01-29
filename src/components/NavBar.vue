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
    <!-- TODO - Add underline to link buttons (except for LOGO) w/ transition. -->
    <!-- TODO - Make the underline transition to fill on active. -->
    <!--// TODO - Make a variable for the height of the navbar -->
    <nav class="flex flex-row w-full md:h-31.25 h-24 bg-bg-db-light text-text select-none">
        <a href="#"
            class="font-inclusive-sans md:w-58.75 w-44 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)] active:bg-primary">LOGO</a>
        <div class="md:flex flex-row hidden lg:gap-0 gap-4 flex-1">
            <a href="#about-me"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active">ABOUT
                ME</a>
            <a href="#projects"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active">WORK</a>
            <a href="#skills"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active">SKILLS</a>
            <a href="#contact-us"
                class="font-inclusive-sans flex-1 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active">CONTACT</a>
        </div>
        <button
            class="font-inclusive-sans text-[2.5rem] md:hidden inline-block ml-auto w-23.5 hover:bg-bg-db-dark active:bg-bg-db-active">☰</button>
    </nav>
</template>

<style scoped></style>
