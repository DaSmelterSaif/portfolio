<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <section
        class="flex gap-15 lg:flex-row flex-col-reverse justify-center items-center xl:px-20 lg:gap-30 px-10 bg-bg-dark md:py-20 py-10">
        <div class="max-w-[95vw] w-full aspect-453/370 flex-1 flex justify-center items-center">
            <div
                class="bg-highlight w-92.5 h-113.25 pl-7.75 pt-16.5 rounded-bl-[9.5rem] rounded-br-[3.375rem] rounded-tl-[4.25rem] rounded-tr-[5rem]">
                <p
                    class="text-text font-roboto-mono text-[clamp(var(--text-5xl),6vw+1rem,var(--text-8xl))] leading-tight">
                    AaBb</p>
                <p class="text-text font-inclusive-sans text-sec-title-font">AaBa</p>
                <p class="text-text font-roboto-flex text-body-font">AaBb</p>
            </div>
        </div>
        <div class="flex-1">
            <h2 class="font-inclusive-sans text-sec-title-font text-text mb-4">Design of This Website</h2>
            <p class="font-roboto-flex text-body-font text-text-muted">
                I made this entire website using some tech, like Vue.js and Tailwind CSS. Some research and inspiration
                gathering was put into this site to make it more appealing. An initial sketch was made in Figma.
            </p>
        </div>
    </section>
</template>

<style scoped></style>
