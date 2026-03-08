<script lang="ts">
import ButtonLink from './generic_components/ButtonLink.vue';
import Skeleton from 'primevue/skeleton';

export default {
    data() {
        return {
            loaded: false,
        }
    },
    components: {
        ButtonLink,
        Skeleton
    },
}
</script>

<template>
    <main class="relative isolate">
        <!--// TODO - Delete ButtonForm or keep it. -->
        <div
            class="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-auto xll:px-56 lg:px-28 relative z-10 overflow-hidden bg-radial-[at_100%_0%] from-gradient-glow from-15% to-bg-dark to-65% xl:min-h-[calc(100vh-7.8125rem)] md:py-20 py-10">
            <div
                class="flex xl:justify-center items-center lg:justify-start lg:mr-[8.333%] lg:ml-0 mx-[8.333vw] lg:min-h-full">
                <!-- bg-blue-300/30 -->
                <div class="mb-[4vh] max-w-124 xl:ml-20 lg:ml-5 flex flex-col items-start">
                    <div class="border-b-12 border-solid border-primary pb-4">
                        <h1
                            class="font-roboto-mono text-text text-[clamp(var(--text-5xl),6vw+1rem,var(--text-8xl))] leading-tight">
                            Building The Web</h1>
                    </div>
                    <p class="font-roboto-flex text-body-font text-text-muted mt-5">
                        Here to help you build your own responsive, user-friendly website, or web app.</p>
                    <div class="flex mt-3 gap-4">
                        <ButtonLink href="#contact-us" variant="primary">GET IN TOUCH</ButtonLink>
                        <ButtonLink href="CV_SaifAldinSunjaq.pdf" download="" variant="secondary">
                            <font-awesome-icon icon="fa-solid fa-download" />
                            MY CV
                        </ButtonLink>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center"> <!-- bg-amber-300/30 -->
                <div
                    class="xll:w-[23vw] 2xl:mt-[3vh] 2xl:ml-[8vw] 2xl:h-auto 2xl:w-97.75 2xl:aspect-391/557 xl:h-auto xl:w-90 xl:aspect-391/557 lg:mt-[9vh] lg:w-90 lg:ml-[6vw] lg:mr-0 w-full m-0 max-w-195.5 mx-[15vw]">
                    <div class="w-full aspect-square"> <!-- img wrapper -->
                        <Skeleton v-if="!loaded" shape="circle" height="100%" />
                        <img class="w-full aspect-square rounded-full" src="/ProfilePic.jpg"
                            alt="Profile picture of Saif Aldin Sunjaq." @load="loaded = true"
                            :style="{ opacity: loaded ? 1 : 0, position: loaded ? 'static' : 'absolute' }">
                    </div>
                    <div class="w-full border-b-7 border-highlight my-2">
                        <p class="text-body-font font-roboto-flex text-text">Saif Aldin Sunjaq</p>
                    </div>
                    <ul class="list-none text-body-font font-roboto-flex text-text-muted">
                        <li>Full-Stack Web Developer</li>
                        <li>Software Engineer</li>
                        <!-- <li>Frontend <span class="font-courier font-bold">&&</span> Backend</li> -->
                    </ul>
                </div>
            </div>
            <p
                class="absolute -bottom-57 -left-37 -z-10 select-none font-quicksand font-bold text-[32rem] text-gradient-glow">
                &#60;&#47;&#62;
            </p>
        </div>
    </main>
</template>

<style scoped></style>
