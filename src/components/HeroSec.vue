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
    <!-- TODO - Fix vertical alignment (especially when pressing F11). -->
    <!-- TODO - Fix h1 growing more than needed. -->
    <GenericSec
        class="flex flex-row xll:px-56 relative -z-20 overflow-hidden bg-radial-[at_100%_0%] from-[#002133] from-15% to-bg-dark to-65% h-[calc(100vh-125px)]">

        <div class="flex-7"> <!-- bg-blue-300/30 -->
            <div class="mt-24 max-w-124 2xl:ml-20">
                <div class="border-b-12 border-solid border-primary pb-4">
                    <h1 class="text-title text-text text-5xl 2xl:text-7xl leading-tight">Building The Web</h1>
                </div>
                <p class="text-body text-text-muted mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam
                    id semper erat. Vestibulum ante ipsum.</p>
            </div>
        </div>

        <div class="flex justify-center items-start flex-10"> <!-- bg-amber-300/30 -->
            <div class="bg-highlight w-97.75 aspect-391/557 xll:w-105 mt-18 ml-[10vw] 2xl:ml-[4vw]"></div>
            <!-- 2xl:ml-[20vw] -->
        </div>

        <p class="absolute -bottom-57 -left-37 -z-10 select-none quicksand-font text-[512px] text-[#002133]">
            &#60;&#47;&#62;
        </p>
    </GenericSec>
</template>

<style scoped></style>
