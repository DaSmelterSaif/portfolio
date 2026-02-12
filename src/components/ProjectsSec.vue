<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <!-- TODO - Change the structure ordering of images and titles+paragraphs, and make CSS control the order. -->
    <!--// TODO - Make the images look distinct from the background. -->
    <!-- TODO - Find a third image, or replace the section with something different. -->
    <!-- TODO - Add gradients here using the utility classes here. -->
    <!-- bg-radial-[at_100%_50%] from-[#002133] from-0% to-bg-dark to-50% -->
    <section id="projects" class="bg-bg-dark md:px-10 px-10 md:py-20 sm:py-10 py-30">
        <div class="">
            <h2 class="font-inclusive-sans text-sec-title-font md:text-center text-text mb-4">
                Featured Work
            </h2>
            <p class="font-roboto-flex text-body-font text-text-muted xl:px-55 lg:px-0 md:pr-0 pr-20 md:text-center">
                Here is a list of my previous work. I used a collection of skills, including design, programming,
                brainstorming, and problem-solving.
            </p>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col justify-center items-center sm:gap-30 gap-0 py-30">
            <img src="/images/campus-management-sys.jpg"
                class="bg-bg aspect-16/10 min-w-41.25 flex-1 shadow-br-highlight border border-text-muted">
            <!-- <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div> -->
            <div class="flex flex-col items-start flex-1 mt-10 w-full">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    Campus Management System
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    An AI-based campus management system that leads you to the services you are looking for and
                    auto-fills the form.<br><br>
                    Project timespan: October - December, 2025.

                </p>
            </div>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col-reverse justify-center items-center sm:gap-30 gap-0 py-30">
            <div class="flex flex-col items-start flex-1 mt-10 w-full">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    Tic-Tac-Toe Discord Bot
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    A Discord bot that can never lose a game of tic-tac-toe.<br><br>
                    Project finished: July, 2025

                </p>
            </div>
            <img src="/images/tic-tac-toe-discord-bot.jpg"
                class="bg-bg aspect-16/10 min-w-41.25 flex-1 shadow-br-highlight border border-text-muted">
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col justify-center items-center sm:gap-30 gap-0 pt-30">
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1 shadow-br-highlight border border-text-muted">
            </div>
            <div class="flex flex-col items-start flex-1 mt-10 w-full">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    This Website
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    My portfolio website. It shows my work and what I do.<br><br>
                    Project finished: February, 2025

                </p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
