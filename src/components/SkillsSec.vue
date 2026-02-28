<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <!--// TODO - Make the spacing between headers and the paragraphs even. -->
    <section id="skills" class="bg-bg-dark lg:px-30 px-10 md:py-20 sm:py-10 py-30">
        <div>
            <h2 class="font-inclusive-sans text-sec-title-font text-text mb-20">Core Skills</h2>
            <div class="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 gap-20 lg:px-0 px-5">
                <div
                    class="flex flex-col items-center bg-radial-[at_50%_50%] from-gradient-glow from-15% to-bg-dark to-75%">
                    <div class="w-24 h-24 bg-bg rounded-full mb-8 flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-code" class="text-text-muted text-6xl" />
                    </div>
                    <h3 class="font-inclusive-sans text-sub-title-font text-text text-center mb-4 xl:h-21">
                        Software Development
                    </h3>
                    <p class="font-roboto-flex text-body-font text-text-muted text-center">
                        Experience in building clean, maintainable, and readable code, whether functional, or
                        object-oriented. Proficient in Python, JavaScript, and Java.
                    </p>
                </div>
                <div
                    class="flex flex-col items-center bg-radial-[at_50%_50%] from-gradient-glow from-15% to-bg-dark to-75%">
                    <div class="w-24 h-24 bg-bg rounded-full mb-8 flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-globe" class="text-text-muted text-6xl" />
                    </div>
                    <h3 class="font-inclusive-sans text-sub-title-font text-text text-center mb-4 xl:h-21">
                        Web Development
                    </h3>
                    <p class="font-roboto-flex text-body-font text-text-muted text-center">
                        Develop responsive, user-friendly websites, and web apps. Focus on usable UI, and
                        component-based architecture. Advanced in Vue.js, and Tailwind CSS.
                    </p>
                </div>
                <div
                    class="flex flex-col items-center bg-radial-[at_50%_50%] from-gradient-glow from-15% to-bg-dark to-75%">
                    <div class="w-24 h-24 bg-bg rounded-full mb-8 flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-server" class="text-text-muted text-6xl" />
                    </div>
                    <h3 class="font-inclusive-sans text-sub-title-font text-text text-center mb-4 xl:h-21">
                        Backend systems
                    </h3>
                    <p class="font-roboto-flex text-body-font text-text-muted text-center">
                        Set up web servers and backend systems to handle end users. Experience in Spring Boot.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
