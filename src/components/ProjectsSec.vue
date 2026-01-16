<script lang="ts">
export default {
    data() {

    }
}
</script>

<!-- TODO - Fix the divs (that are to become images) not scaling well to large screens. -->

<template>
    <section class="bg-bg-dark md:px-10 px-0">
        <div class="flex flex-col items-center">
            <h2 class="text-sec-title text-text">
                Featured Work
            </h2>
            <p class="text-body text-body-font text-text-muted md:px-55 px-[13vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante ipsum.
            </p>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col justify-center items-center gap-30 py-30">
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div>
            <div class="flex flex-col items-start flex-1 mt-10">
                <h3 class="text-sub-title text-text mb-4">
                    Campus Management System
                </h3>
                <p class="text-body text-body-font text-text-muted md:px-0 px-[13vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante
                    ipsum.
                </p>
            </div>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col-reverse justify-center items-center gap-30 py-30">
            <div class="flex flex-col items-start flex-1 mt-10">
                <h3 class="text-sub-title text-text mb-4">
                    Work #2
                </h3>
                <p class="text-body text-body-font text-text-muted md:px-0 px-[13vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante
                    ipsum.
                </p>
            </div>
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col justify-center items-center gap-30 py-30">
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div>
            <div class="flex flex-col items-start flex-1 mt-10">
                <h3 class="text-sub-title text-text mb-4">
                    Work #3
                </h3>
                <p class="text-body text-body-font text-text-muted md:px-0 px-[13vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante
                    ipsum.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
