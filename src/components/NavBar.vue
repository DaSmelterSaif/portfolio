<script lang="ts">
export default {
    data() {
        return {
            hamburgerOpen: false,
        }
    },
    methods: {
        toggleNavbar() {
            this.hamburgerOpen = !this.hamburgerOpen;
        }
    }
}
</script>

<template>
    <!-- SELF NOTE - I prefer using margin and padding than height and width
     properties for the layout. I use height and width for elements that require
     those specific values. I also prefer using text-align than flexbox.
     I have a preference for having margin for the entire section, and
     independant margin properties for the separate elements as needed. -->
    <!--// TODO - Change hamburger icon. -->
    <!--// TODO - Add underline to link buttons (except for LOGO) w/ transition. -->
    <!--// TODO - Make the underline transition to fill on active. -->
    <!--// TODO - Make the hamburger menu functional (on mobile). -->
    <!-- TODO - Add a Logo. -->
    <nav class="relative flex flex-col">
        <div class="flex flex-row w-full md:h-31.25 h-24 bg-bg-db-light text-text select-none">
            <a href="/"
                class="font-inclusive-sans md:w-58.75 w-44 flex justify-center items-center text-[clamp(2rem,2.5vw+1rem,2.75rem)] active:bg-primary">SAIF</a>
            <div class="md:flex flex-row hidden lg:gap-0 gap-4 flex-1">
                <a href="#about-me"
                    class="font-inclusive-sans relative flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center hover:after:h-2.5 active:after:h-full active:after:bg-primary after:h-0 after:w-full after:absolute after:bottom-0 after:-z-1 after:bg-[green] after:transition-[height,background] after:delay-1 ease-out after:motion-reduce:transition-none isolate">ABOUT
                    ME</a>
                <a href="#projects"
                    class="font-inclusive-sans relative flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center hover:after:h-2.5 active:after:h-full active:after:bg-primary after:h-0 after:w-full after:absolute after:bottom-0 after:-z-1 after:bg-[green] after:transition-[height,background] after:delay-1 ease-out after:motion-reduce:transition-none isolate">WORK</a>
                <a href="#skills"
                    class="font-inclusive-sans relative flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center hover:after:h-2.5 active:after:h-full active:after:bg-primary after:h-0 after:w-full after:absolute after:bottom-0 after:-z-1 after:bg-[green] after:transition-[height,background] after:delay-1 ease-out after:motion-reduce:transition-none isolate">SKILLS</a>
                <a href="#contact-us"
                    class="font-inclusive-sans relative flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center hover:after:h-2.5 active:after:h-full active:after:bg-primary after:h-0 after:w-full after:absolute after:bottom-0 after:-z-1 after:bg-[green] after:transition-[height,background] after:delay-1 ease-out after:motion-reduce:transition-none isolate">CONTACT</a>
            </div>
            <button
                class="font-inclusive-sans text-[2.5rem] md:hidden inline-block ml-auto w-23.5 hover:bg-bg-db-dark active:bg-bg-db-active"
                @click="toggleNavbar">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
        </div>
        <div v-if="hamburgerOpen" id="mobile-navbar"
            class="absolute md:hidden z-10 top-full flex-col w-full lg:gap-0 gap-4 flex-1 bg-bg-db-light text-text border-t border-text-muted select-none">
            <a href="#about-me"
                class="font-inclusive-sans py-3 flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center">ABOUT
                ME</a>
            <a href="#projects"
                class="font-inclusive-sans py-3 flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center">WORK</a>
            <a href="#skills"
                class="font-inclusive-sans py-3 flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center">SKILLS</a>
            <a href="#contact-us"
                class="font-inclusive-sans py-3 flex-1 flex justify-center items-center text-[clamp(1rem,1.3vw+1rem,2.75rem)] hover:bg-bg-db-dark active:bg-bg-db-active text-center">CONTACT</a>
        </div>
    </nav>
</template>

<style scoped></style>
