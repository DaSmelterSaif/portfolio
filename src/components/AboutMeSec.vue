<script lang="ts">

export default {
    data() {

    },
}
</script>

<!--// TODO - Figure out why margin affects the parent element -->
<!--// I'm switching margin with padding for now. -->
<!--// Apparently, adding @layer base... to style.css somehow fixed it??? -->
<!-- I removed @layer base... and it's working now. WHAT THNKAJFHKAJ -->

<template>
    <!--// TODO - Fix the h2 header being too much close to the top. -->
    <!-- TODO - Pick images for this sec. -->
    <!-- Beware, negative margin at first div. -->
    <section id="about-me" class="bg-bg-dark w-full flex 2xl:flex-row flex-col md:px-28 p-10 md:py-20 sm:py-10 py-30">
        <div
            class="flex-1 flex flex-col justify-center 2xl:bg-radial-[at_0%_50%] md:bg-radial-[at_50%_50%] bg-radial-[at_0%_50%] from-gradient-glow from-15% to-transparent to-65% md:-ml-28 -ml-10 md:pl-28 pl-10">
            <!-- bg-amber-300/30 -->
            <h2 class="font-inclusive-sans text-sec-title-font text-text 2xl:text-left md:text-center mb-4">
                Who I am</h2>
            <p
                class="font-roboto-flex text-body-font text-text-muted 2xl:px-0 2xl:max-w-120 2xl:text-left md:text-center xl:px-60 md:px-0 pr-20">
                I’m a web developer <span class="font-courier font-bold">&&</span> programmer, specialized in building
                functional websites and developing
                backend systems. I have experience with Arduinos and web-based games. I'm interested in programming, app
                development, embedded systems, and electricity.<br><br>
            </p>
        </div>
        <div class="flex-1 flex justify-center items-center pt-30"> <!-- bg-emerald-300/30 -->
            <div class="relative lg:w-(--image-1-base-w) md:w-(--image-1-md-w) w-(--image-1-sm-w) aspect-506/571">
                <img src="/images/PortfolioLaptopImage.jpg" alt="Laptop on a table" class="w-full rounded-sm">
                <div
                    class="absolute top-24/32 left-3/32 -translate-1/2 lg:w-(--image-2-base-w) md:w-(--image-2-md-w) w-(--image-2-sm-w) aspect-11/10 bg-bg-light">
                </div>
                <div
                    class="absolute top-7/32 left-29/32 -translate-1/2 lg:w-(--image-3-base-w) md:w-(--image-3-md-w) w-(--image-3-sm-w) aspect-229/146 bg-bg-light">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#about-me {
    --image-1-base-w: 31.625rem;
    --image-2-base-w: 11.6875rem;
    --image-3-base-w: 14.3125rem;

    --image-md-scale: 0.75;
    --image-sm-scale: 0.55;

    --image-1-md-w: calc(var(--image-1-base-w)*var(--image-md-scale));
    --image-2-md-w: calc(var(--image-2-base-w)*var(--image-md-scale));
    --image-3-md-w: calc(var(--image-3-base-w)*var(--image-md-scale));

    --image-1-sm-w: calc(var(--image-1-base-w)*var(--image-sm-scale));
    --image-2-sm-w: calc(var(--image-2-base-w)*var(--image-sm-scale));
    --image-3-sm-w: calc(var(--image-3-base-w)*var(--image-sm-scale));
}
</style>
