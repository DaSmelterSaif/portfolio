<script lang="ts">

export default {
    data() {

    },
}
</script>

<template>
    <!--// TODO - Look into max-width for image. -->
    <!--// TODO - Look into square screen making the section large issue. -->
    <!-- TODO - Fix spacing between headers and paragraphs. -->
    <section
        class="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-auto xll:px-56 lg:px-28 relative -z-20 overflow-hidden bg-radial-[at_100%_0%] from-[#002133] from-15% to-bg-dark to-65% xl:min-h-[calc(100vh-125px)] md:py-20 py-10">
        <div
            class="flex xl:justify-center items-center lg:justify-start lg:mr-[8.333%] lg:ml-0 mx-[8.333vw] lg:min-h-full   ">
            <!-- bg-blue-300/30 -->
            <div class="mb-[12vh] max-w-124 xl:ml-20 lg:ml-5">
                <div class="border-b-12 border-solid border-primary pb-4">
                    <h1
                        class="font-roboto-mono text-text text-[clamp(var(--text-5xl),6vw+1rem,var(--text-8xl))] leading-tight">
                        Building The Web</h1>
                </div>
                <p class="font-roboto-flex text-body-font text-text-muted mt-8">
                    Lorem ipsum dolor sit
                    amet,
                    consectetur adipiscing
                    elit.
                    Nullam
                    id semper erat. Vestibulum ante ipsum.</p>
            </div>
        </div>
        <div class="flex justify-center items-center"> <!-- bg-amber-300/30 -->
            <div
                class="xll:w-[23vw] 2xl:mt-[3vh] 2xl:ml-[8vw] 2xl:h-auto 2xl:w-97.75 2xl:aspect-391/557 xl:h-auto xl:w-90 xl:aspect-391/557 lg:mt-[9vh] lg:w-90 lg:ml-[6vw] lg:mr-0 w-full m-0 max-w-195.5 mx-[15vw]">
                <img class="w-full aspect-square rounded-full" src="/ProfilePic.jpg">
                <div class="w-full border-b-7 border-highlight my-2">
                    <p class="text-body-font font-roboto-flex text-text">Saif Aldin Sunjaq</p>
                </div>
                <ul class="list-none text-body-font font-roboto-flex text-text-muted">
                    <li>Web Developer and Designer</li>
                    <li>Frontend <span class="font-courier font-bold">&&</span> Backend</li>
                </ul>
            </div>
        </div>
        <p class="absolute -bottom-57 -left-37 -z-10 select-none font-quicksand font-bold text-[32rem] text-[#002133]">
            &#60;&#47;&#62;
        </p>
    </section>
</template>

<style scoped></style>
