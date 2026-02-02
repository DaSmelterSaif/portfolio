<script lang="ts">
import ButtonLink from './generic_components/ButtonLink.vue';

export default {
    data() {

    },
    components: {
        ButtonLink
    }
}
</script>

<template>
    <!-- TODO - Fix buttons growing on small screens. -->
    <section id="contact-us"
        class="flex flex-col items-center justify-center xl:px-120 md:px-20 px-[10vw] bg-bg-light md:py-40 py-25">
        <h2 class="font-inclusive-sans text-sec-title-font text-text mb-4">Get in Touch</h2>
        <p class="text-center font-roboto-flex text-body-font text-text-muted mb-4">
            Got a project in mind? Please drop an email so we can discuss further.
        </p>
        <div class="flex sm:flex-row flex-col gap-3">
            <ButtonLink href="" variant="primary">OPEN EMAIL APP</ButtonLink>
            <ButtonLink href="" variant="tertiary">
                <font-awesome-icon icon="fa-regular fa-clone" class="mr-1" />
                saifaldinsunjaq@gmail.com
            </ButtonLink>
        </div>
    </section>
</template>

<style scoped></style>
