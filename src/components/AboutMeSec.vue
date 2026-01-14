<script lang="ts">
import GenericSec from './generic_components/GenericSec.vue';

export default {
    data() {

    },
    components: {
        GenericSec
    }
}
</script>

<!--// TODO - Figure out why margin affects the parent element -->
<!--// I'm switching margin with padding for now. -->
<!--// Apparently, adding @layer base... to style.css somehow fixed it??? -->
<!-- I removed @layer base... and it's working now. WHAT THNKAJFHKAJ -->

<template>
    <GenericSec class="bg-bg-dark w-full min-h-screen flex 2xl:flex-row flex-col">
        <div class="flex-1"> <!-- bg-amber-300/30 -->
            <h2 class="text-sec-title text-text mt-37.5 2xl:text-left text-center">Who I am</h2>
            <p class="text-body text-3.5xl text-text-muted 2xl:px-0 2xl:max-w-120 2xl:text-left text-center px-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante ipsum.
            </p>
        </div>
        <!-- TODO - Make the positioning of the divs (that are to become images) consistent. -->
        <div class="flex-1 flex justify-center items-center"> <!-- bg-emerald-300/30 -->
            <div class="relative w-126.5 h-142.75 bg-bg">
                <div class="absolute top-24/32 left-3/32 -translate-1/2 w-46.75 h-42.5 bg-bg-light"></div>
                <div class="absolute top-7/32 left-29/32 -translate-1/2 w-57.25 h-36.5 bg-bg-light"></div>
            </div>
        </div>
    </GenericSec>
</template>

<style scoped></style>
