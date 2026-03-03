<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <section
        class="flex gap-15 lg:flex-row flex-col-reverse justify-center items-center xl:px-20 lg:gap-30 px-10 bg-bg-dark md:py-20 sm:py-10 py-30">
        <div class="max-w-[95vw] w-full aspect-453/370 flex-1 flex justify-center items-center">
            <div
                class="bg-highlight sm:w-92.5 w-75 aspect-370/453 pl-7.75 pt-16.5 rounded-bl-[9.5rem] rounded-br-[3.375rem] rounded-tl-[4.25rem] rounded-tr-[5rem]">
                <p
                    class="text-text font-roboto-mono text-[clamp(var(--text-5xl),6vw+1rem,var(--text-8xl))] leading-tight">
                    AaBb</p>
                <p class="text-text font-inclusive-sans text-sec-title-font">AaBa</p>
                <p class="text-text font-roboto-flex text-body-font">AaBb</p>
            </div>
        </div>
        <div class="flex-1 bg-radial-[at_50%_50%] from-gradient-glow from-20% to-transparent to-75%">
            <h2 class="font-inclusive-sans text-sec-title-font text-text mb-4">Design of This Website</h2>
            <p class="font-roboto-flex text-body-font text-text-muted xl:p-0 pr-20">
                A lot of research, inspiration-gathering, and effort went into making this website. It was made with
                simplicity, accessibility, and usability in mind. <a
                    href="https://www.linkedin.com/posts/saif-aldin-s-86a166296_after-a-considerable-amount-of-hard-work-activity-7433615264384057346-dOkM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeR_1IBjGvePznNe3yLbHuFXPaNfrSZadY"
                    target="_blank" class="text-primary underline underline-offset-6">Check out this LinkedIn post!</a>

            </p>
        </div>
    </section>
</template>

<style scoped></style>
