<script lang="ts">
export default {
    data() {
        return {}
    },
    props: {
        href: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            required: true,
            validator: (value: string) => ["primary", "secondary", "tertiary"].includes(value)
        },
    },
    computed: {
        buttonClasses(): string {
            const baseClasses = "text-2xl font-roberto-flex rounded-2xl tracking-tighter select-none";
            const variantClasses = {
                primary: "px-3.5 py-3.25 bg-primary hover:bg-btn-hover text-black selection:bg-secondary active:bg-btn-clicked focus:bg-btn-focused focus:outline-primary focus:outline-3",
                secondary: "px-[calc(0.6875rem-1px)] py-[calc(0.5625rem-1px)] bg-bg-dark active:bg-btn-sec-clicked hover:bg-btn-sec-hover focus:bg-btn-sec-focused focus:outline-btn-clicked focus:outline-3 text-primary border-primary border-4",
                tertiary: "px-3.5 py-3.25 text-primary hover:bg-btn-tert-hover active:bg-btn-tert-clicked focus:bg-btn-tert-focused focus:outline-primary focus:outline-2"
            };

            return `${baseClasses} ${variantClasses[this.variant as keyof typeof variantClasses]}`;
        }
    }
}

</script>

<template>
    <a :href="href" :class="buttonClasses" class="drop-shadow-lg drop-shadow-black">
        <slot />
    </a>
</template>

<style scoped></style>
