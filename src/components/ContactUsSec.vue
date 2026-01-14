<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <!-- TODO (not really idk) - Fix inconsistent padding (here, it's 120, while in GenericSec, it's 20). -->
    <!-- It really only affects zooming in (extremly). It's not really practical, but could infer more
     info on how padding works. -->
    <section class="flex flex-col items-center justify-center px-120 bg-bg-light h-[85vh]">
        <h2 class="text-sec-title text-text mb-4">Get in Touch</h2>
        <p class="text-center text-body text-3.5xl text-text-muted mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper erat. Vestibulum ante ipsum.
        </p>
        <div class="flex justify-center items-center w-35 h-12 bg-primary rounded-xl text-body">BUTTON</div>
    </section>
</template>

<style scoped></style>
