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

<template>
    <GenericSec
        class="flex flex-row relative -z-20 overflow-hidden bg-radial-[at_100%_0%] from-[#002133] from-15% to-bg-dark to-65% h-[calc(100vh-125px)]">

        <div class="mt-24 w-124">
            <div class="border-b-12 border-solid border-primary">
                <h1 class="text-title text-text">Building The Web</h1>
            </div>
            <p class="text-body text-text-muted mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id semper erat. Vestibulum ante ipsum.</p>
        </div>

        <div class="bg-highlight w-97.75 h-139.25 mt-18 ml-72"></div>

        <p class="absolute -bottom-57 -left-37 -z-10 select-none quicksand-font text-[512px] text-[#002133]">
            &#60;&#47;&#62;
        </p>
    </GenericSec>
</template>

<style scoped></style>
