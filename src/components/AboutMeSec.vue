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
    <GenericSec class="bg-bg-dark w-full h-screen flex flex-row">
        <div class="flex-1"> <!-- bg-amber-300/30 -->
            <h2 class="text-sec-title text-text mt-37.5">Who I am</h2>
            <p class="text-body text-text-muted max-w-120">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante ipsum.
            </p>
        </div>
        <!-- TODO - Make the positioning of the divs (that are to become images) consistent. -->
        <div class="flex-1 relative"> <!-- bg-emerald-300/30 -->
            <div class="absolute top-1/2 left-1/2 -translate-1/2 w-126.5 h-142.75 bg-bg"></div>
            <div class="absolute top-22/32 left-6/32 -translate-1/2 w-46.75 h-42.5 bg-bg-light"></div>
            <div class="absolute top-10/32 left-26/32 -translate-1/2 w-57.25 h-36.5 bg-bg-light"></div>
        </div>
    </GenericSec>
</template>

<style scoped></style>
