<script lang="ts">
import Image from 'primevue/image';

export default {
    data() {

    },
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Image
    }
}
</script>

<template>
    <!-- TODO - Change the structure ordering of images and titles+paragraphs, and make CSS control the order. -->
    <section id="projects" class="bg-bg-dark md:px-10 px-10 md:py-20 sm:py-10 py-30" aria-label="Featured Work">
        <div
            class="md:bg-radial-[at_50%_50%] bg-radial-[at_0%_50%] -ml-10 pl-10 from-gradient-glow from-15% to-transparent to-65%">
            <h2 class="font-inclusive-sans text-sec-title-font md:text-center text-text mb-4">
                Featured Work
            </h2>
            <p class="font-roboto-flex text-body-font text-text-muted xl:px-55 lg:px-0 md:pr-0 pr-20 md:text-center">
                Here is a list of my previous work. I used a collection of skills, including design, programming,
                brainstorming, and problem-solving.
            </p>
        </div>
        <div
            class="flex lg:flex-row lg:items-start flex-col justify-center items-center sm:gap-30 gap-0 py-30 lg:bg-radial-[at_100%_50%] bg-transparent from-gradient-glow from-15% to-transparent to-65% lg:-mr-10 lg:pr-10">
            <Image src="images/campus-management-sys.jpg" alt="Campus management system UI." preview :pt="{
                root: 'bg-bg aspect-16/10 min-w-41.25 flex-1 shadow-br-highlight border border-text-muted',
                image: { loading: 'lazy' }
            }" />
            <div
                class="flex flex-col items-start flex-1 mt-10 w-full lg:bg-none bg-radial-[at_0%_50%] from-gradient-glow from-20% to-transparent to-75% lg:ml-0 lg:pl-0 -ml-20 pl-10">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    Campus Management System
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    An AI-based campus management system that leads you to the services you are looking for and
                    auto-fills the form. <a href="https://github.com/DaSmelterSaif/campus-management-sys-frontend"
                        target="_blank" class="text-primary underline underline-offset-6">GitHub
                        Repository</a> <br><br>
                    Project timespan: October - December, 2025.

                </p>
            </div>
        </div>
        <div
            class="flex lg:flex-row lg:items-start flex-col-reverse justify-center items-center sm:gap-30 gap-0 py-30 lg:bg-radial-[at_0%_50%] bg-transparent from-gradient-glow from-15% to-transparent to-65% lg:-ml-10 lg:pl-10">
            <div
                class="flex flex-col items-start flex-1 mt-10 w-full lg:bg-none bg-radial-[at_0%_50%] from-gradient-glow from-20% to-transparent to-75% lg:ml-0 lg:pl-0 -ml-20 pl-10">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    Tic-Tac-Toe Discord Bot
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    A Discord bot that can never lose a game of tic-tac-toe. <a
                        href="https://github.com/DaSmelterSaif/AhmedHabibBot" target="_blank"
                        class="text-primary underline underline-offset-6">GitHub Repository</a>
                    <br><br>
                    Project finished: July, 2025

                </p>
            </div>
            <Image src="images/tic-tac-toe-discord-bot.jpg"
                alt="A discord server displaying the tic-tac-toe bot responding to the user's inputs." preview :pt="{
                    root: 'bg-bg aspect-16/10 min-w-41.25 flex-1 shadow-br-highlight border border-text-muted',
                    image: { loading: 'lazy' }
                }" />
        </div>
        <div
            class="flex lg:flex-row lg:items-start flex-col justify-center items-center sm:gap-30 gap-0 pt-30 lg:bg-radial-[at_100%_50%] bg-none from-gradient-glow from-15% to-transparent to-65% lg:-mr-10 lg:pr-10">
            <Image src="images/e-gaming-sustainability-competition.jpg" alt="A 2D web game with an underwater theme."
                preview :pt="{
                    root: 'bg-bg aspect-16/10 min-w-41.25 flex-1 shadow-br-highlight border border-text-muted',
                    image: { loading: 'lazy' }
                }" />
            <div
                class="flex flex-col items-start flex-1 mt-10 w-full lg:bg-none bg-radial-[at_0%_50%] from-gradient-glow from-20% to-transparent to-75% lg:ml-0 lg:pl-0 -ml-20 pl-10">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    E-gaming Sustainability Competition Game
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    A web game done for the E-gaming Sustainability Competition using Phaser.js. Won 2nd place in the
                    competition. <a href="https://dasmeltersaif.github.io/E-gaming-Sustainability-Competition/"
                        target="_blank" class="text-primary underline underline-offset-6">Demo</a><br><br>
                    Project finished: February, 2025

                </p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
