<script lang="ts">
export default {
    data() {

    }
}
</script>

<!--// TODO - Fix the divs (that are to become images) not scaling well to large screens. -->

<template>
    <section id="projects" class="bg-bg-dark md:px-10 px-10 md:py-20 sm:py-10 py-30">
        <div class="">
            <h2 class="font-inclusive-sans text-sec-title-font md:text-center text-text mb-4">
                Featured Work
            </h2>
            <!--// TODO - Fix the padding issues with this p element. -->
            <p class="font-roboto-flex text-body-font text-text-muted xl:px-55 lg:px-0 md:pr-0 pr-20 md:text-center">
                Here is a list of my previous work. I used a collection of skills, including ____.
            </p>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col justify-center items-center sm:gap-30 gap-0 py-30">
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div>
            <div class="flex flex-col items-start flex-1 mt-10">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    Campus Management System
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    An AI-powered campus management system that helps you find what you need using the chatbot
                    and can even fill in the forms for you if requested.<br><br> Work completed on: December 2025.
                </p>
            </div>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col-reverse justify-center items-center sm:gap-30 gap-0 py-30">
            <div class="flex flex-col items-start flex-1 mt-10">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    Work #2
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante
                    ipsum.
                </p>
            </div>
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div>
        </div>
        <div class="flex lg:flex-row lg:items-start flex-col justify-center items-center sm:gap-30 gap-0 pt-30">
            <div class="bg-bg aspect-16/10 max-w-[95vw] w-full flex-1"></div>
            <div class="flex flex-col items-start flex-1 mt-10">
                <h3 class="font-inclusive-sans text-sub-title-font text-text mb-2">
                    This Site
                </h3>
                <p class="font-roboto-flex text-body-font text-text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante
                    ipsum.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
