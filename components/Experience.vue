<template>
    <div class="my-4">
        <span class="text-6xl lg:text-7xl my-2 text-info dark:text-lime-500 mx-4 lg:mx-0 title-text">Experience</span>
        <span class="hidden lg:block my-2 dark:text-white">Click on the <span class="text-info dark:text-lime-500">dates</span> to show
            details</span>
        <span class="block lg:hidden my-2 dark:text-white mx-4">Tap on the <span class="text-info dark:text-lime-500">dates</span> to show
            details</span>
        <Timeline :items="experiences" @toggle-content="toggleContent" />
    </div>
</template>
<script setup lang="ts">
import experienceData from '@/data/experience.json'
const experiences = ref(experienceData)

const currentShowIndex = ref(-1)
const colorMode = useColorMode()
const primaryColor = (() => {
    return colorMode.value === 'dark' ? 'text-lime-500' : 'text-info'
})
const toggleContent = ({ show, index }: { show: boolean, index: number }) => {
    console.log(show, index)
    experiences.value[index] = { ...experiences.value[index], showLongContent: show }
    if (currentShowIndex.value == index) {
        currentShowIndex.value = -1
    }
    if (currentShowIndex.value >= 0) {
        experiences.value[currentShowIndex.value] = { ...experiences.value[currentShowIndex.value], showLongContent: false }
    }
    currentShowIndex.value = index
}
</script>