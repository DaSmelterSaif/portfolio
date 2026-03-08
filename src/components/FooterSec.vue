<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <!-- TODO - Make the links functional or remove them. -->
    <footer class="flex flex-col md:p-15 p-9 bg-bg-db-light">
        <p class="font-gasoek-one text-body-font text-text mb-10 select-none">SAIF</p><br>
        <div class="flex flex-row justify-start gap-5 mb-5">
            <div class="max-w-14 aspect-square bg-bg-light rounded-full">
                <a href="https://github.com/DaSmelterSaif" target="_blank"
                    class="flex items-center justify-center w-full h-full p-1">
                    <img src="/social-media-logos/github-logo.svg" alt="GitHub Logo">
                </a>
            </div>
            <div class="w-14 aspect-square bg-bg-light rounded-full">
                <a href="https://www.linkedin.com/in/saif-aldin-s-86a166296/" target="_blank"
                    class="flex items-center justify-center w-full h-full p-1 translate-x-0.5">
                    <img src="/social-media-logos/linkedin-logo.png" alt="LinkedIn Logo">
                </a>
            </div>
            <div class="w-14 aspect-square bg-bg-light rounded-full">
                <a href="mailto:saifaldinsunjaq@gmail.com" class="flex items-center justify-center w-full h-full p-1">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="text-text text-[2.5rem]" />
                </a>
            </div>
        </div>
        <p class="font-inclusive-sans text-lg text-text-muted text-center">Saif Aldin Sunjaq 2026. Do not copy and use
            for non-personal matters.</p>
    </footer>

    <!-- CODE FOR EXTRA LINKS. USE WHEN NEEDED. -->
    <!--
    <footer class="flex flex-row md:p-15 p-9 bg-bg-db-light">
        <div class="flex-1">
            <p class="font-inclusive-sans text-body-font text-text mb-10 select-none">SAIF</p><br>
            <div>
                <ul class="font-inclusive-sans text-text text-body-font">
                    <li class="block md:pr-10 md:float-left py-4">Link #1</li>
                    <li class="block md:px-10 md:float-left py-4">Link #2</li>
                    <li class="block md:px-10 md:float-left py-4">Link #3</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col justify-end gap-5">
            <div class="max-w-14 aspect-square bg-bg-light rounded-full">
                <a href="https://github.com/DaSmelterSaif" target="_blank"
                    class="flex items-center justify-center w-full h-full p-1">
                    <img src="/social-media-logos/github-logo.svg" alt="GitHub Logo">
                </a>
            </div>
            <div class="w-14 aspect-square bg-bg-light rounded-full">
                <a href="https://www.linkedin.com/in/saif-aldin-s-86a166296/" target="_blank"
                    class="flex items-center justify-center w-full h-full p-1 translate-x-0.5">
                    <img src="/social-media-logos/linkedin-logo.png" alt="LinkedIn Logo">
                </a>
            </div>
            <div class="w-14 aspect-square bg-bg-light rounded-full">
                <a href="mailto:saifaldinsunjaq@gmail.com" class="flex items-center justify-center w-full h-full p-1">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="text-text text-[2.5rem]" />
                </a>
            </div>
        </div>
    </footer>
     -->
</template>

<style scoped></style>
