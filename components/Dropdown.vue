<template>
    <div class="relative inline-block w-10">
        <button class="cursor-pointer text-2xl" @click="show = !show">
            <MdiIcon class="text-4xl" icon="mdiMenu" />
        </button>
        <div v-show="show" class="absolute z-20">
            <div class="flex flex-col border border-gray-300 rounded-lg bg-white dark:bg-neutral-900 text-xl font-[Montserrat]">
                <slot></slot>  
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const show = ref(false)
</script>