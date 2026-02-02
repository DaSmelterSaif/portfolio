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
                <div class="flex flex-col items-center">
                    <div class="w-24 h-24 bg-bg rounded-full mb-8 flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-code" class="text-text-muted text-6xl" />
                    </div>
                    <h3 class="font-inclusive-sans text-sub-title-font text-text text-center mb-4 xl:h-21">Web
                        Development
                        &
                        Programming
                    </h3>
                    <p class="font-roboto-flex text-body-font text-text-muted text-center">
                        Website development, with or without backend systems. Experienced in Vue.js, Tailwind CSS,
                        Flask/Spring Boot, and Docker.
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-24 h-24 bg-bg rounded-full mb-8 flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-computer" class="text-text-muted text-6xl" />
                    </div>
                    <h3 class="font-inclusive-sans text-sub-title-font text-text text-center mb-4 xl:h-21">
                        Machine Learning
                        & AI
                    </h3>
                    <p class="font-roboto-flex text-body-font text-text-muted text-center">
                        A background in machine learning models and the different types of classifiers. I can
                        train models to detect patterns.
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-24 h-24 bg-bg rounded-full mb-8 flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-microchip" class="text-text-muted text-6xl" />
                    </div>
                    <h3 class="font-inclusive-sans text-sub-title-font text-text text-center mb-4 xl:h-21">
                        Embedded
                        Systems</h3>
                    <p class="font-roboto-flex text-body-font text-text-muted text-center">
                        Utilizing the power of Arduinos to test and prototype designs before deployment. I can do
                        electrical work and wire devices together.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
