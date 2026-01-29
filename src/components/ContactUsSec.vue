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
    <!--// TODO (not really idk) - Fix inconsistent padding (here, it's 120, while in GenericSec, it's 20). -->
    <!--// It really only affects zooming in (extremly). It's not really practical, but could infer more
     info on how padding works. -->
    <section id="contact-us"
        class="flex flex-col items-center justify-center xl:px-120 md:px-20 px-[10vw] bg-bg-light md:py-40 py-25">
        <h2 class="font-inclusive-sans text-sec-title-font text-text mb-4">Get in Touch</h2>
        <p class="text-center font-roboto-flex text-body-font text-text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante ipsum.
        </p>
        <ButtonLink href="" variant="primary">BUTTON</ButtonLink>
    </section>
</template>

<style scoped></style>
