<script lang="ts">
export default {
    data() {

    }
}
</script>

<template>
    <footer class="flex flex-row min-h-[35vh] p-15 bg-bg-db-light">
        <div class="flex-1">
            <p class="text-body text-body-font text-text mb-10">LOGO</p><br>
            <div>
                <ul class="text-body text-text text-body-font">
                    <li class="block md:pr-10 md:float-left py-4">Link #1</li>
                    <li class="block md:px-10 md:float-left py-4">Link #2</li>
                    <li class="block md:px-10 md:float-left py-4">Link #3</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col justify-end gap-1">
            <div class="w-14 aspect-square bg-bg-light rounded-full"></div>
            <div class="w-14 aspect-square bg-bg-light rounded-full"></div>
            <div class="w-14 aspect-square bg-bg-light rounded-full"></div>
        </div>
    </footer>
</template>

<style scoped></style>
