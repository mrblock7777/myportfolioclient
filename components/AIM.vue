<template>
    <div
        class="flex border-2 border-black dark:border-white hover:border-info dark:hover:border-lime-500 svg-preset pb-4 px-2 cursor-pointer">
        <svg :class="bgColor" :width="width" :height="height" viewBox="0 0 24 24" id="icon"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13,9H9a2,2,0,0,0-2,2V23H9V18h4v5h2V11A2,2,0,0,0,13,9ZM9,16V11h4v5Z" />
        </svg>
        <svg :class="bgColor" :width="width" :heigh="height" viewBox="3 0 24 24" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
            class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
            <polygon points="10 11 13 11 13 21 10 21 10 23 18 23 18 21 15 21 15 11 18 11 18 9 10 9 10 11" />
        </svg>
        <!-- Letter M -->
        <svg :class="bgColor" :width="width" :heigh="height" viewBox="-1 0 24 24" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
            class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
            <polygon
                points="12 9 10.48 14 10 15.98 9.54 14 8 9 6 9 6 23 8 23 8 15 7.84 13 8.42 15 10 19.63 11.58 15 12.16 13 12 15 12 23 14 23 14 9 12 9" />
        </svg>
    </div>
</template>
<script setup lang="ts">
const width = ref('50px')
const height = ref('50px')
const bgColor = ref('fill-current')
</script>