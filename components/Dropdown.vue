<template>
    <div class="relative inline-block">
        <button class="border border-gray-300 rounded-lg cursor-pointer px-4 py-2 text-2xl" @click="show = !show">
            <MdiIcon icon="mdiMenu" />
        </button>
        <div v-show="show" class="absolute">
            <div class="flex flex-col border border-gray-300 rounded-lg bg-white text-xl font-[Montserrat]">
                <slot></slot>  
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const show = ref(false)
</script>