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
    <!--// TODO - Fix h1 growing more than needed. -->
    <GenericSec
        class="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-2 xll:px-56 relative -z-20 overflow-hidden bg-radial-[at_100%_0%] from-[#002133] from-15% to-bg-dark to-65% min-h-[calc(100vh-125px)]">

        <div class="flex xl:justify-center items-center lg:justify-start lg:mr-[8.333%] lg:ml-0 ml-[8.333%]">
            <!-- bg-blue-300/30 -->
            <div class="mb-[12vh] max-w-124 xl:ml-20 lg:ml-5">
                <div class="border-b-12 border-solid border-primary pb-4">
                    <h1 class="text-title text-text text-[clamp(var(--text-3xl),6vw,var(--text-8xl))] leading-tight">
                        Building The Web</h1>
                </div> <!-- lg:text-xl xl:text-2xl -->
                <p class="text-body text-[clamp(var(--text-xl),1.666667vw,var(--text-4xl))] text-text-muted mt-8">
                    Lorem ipsum dolor sit
                    amet,
                    consectetur adipiscing
                    elit.
                    Nullam
                    id semper erat. Vestibulum ante ipsum.</p>
            </div>
        </div>
        <!-- TODO - Fix the height of the card (that has bg-highlight utility class). -->
        <div class="flex justify-center items-center"> <!-- bg-amber-300/30 -->
            <!-- w-105 -->
            <div
                class="bg-highlight xll:w-[23vw] 2xl:mt-[7vh] 2xl:ml-[8vw] 2xl:h-auto 2xl:w-97.75 2xl:aspect-391/557 xl:h-auto xl:w-90 xl:aspect-391/557 lg:mt-[13vh] lg:h-66 lg:w-auto lg:aspect-557/391 lg:ml-[6vw] h-auto w-[50vw] aspect-391/557">
            </div>
            <!-- 2xl:ml-[20vw] -->
        </div>
        <!-- 32rem -->
        <p class="absolute -bottom-57 -left-37 -z-10 select-none quicksand-font text-[32rem] text-[#002133]">
            &#60;&#47;&#62;
        </p>
    </GenericSec>
</template>

<style scoped></style>
