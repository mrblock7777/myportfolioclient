<template>
    <div>
        <span class="text-6xl lg:text-7xl my-2 text-info dark:text-lime-500 mx-4 lg:mx-0 title-text">Alma Mater</span>
        <div class="flex flex-wrap justify-between my-5">
            <div class="flex flex-wrap justify-center lg:justify-normal" v-for="education in educations">
                <img class="h-60 lg:mx-6 lg:my-0 my-6" :src="$config.public.s3AssetsBucketUrl + education.logo" :alt="education.almaMater">
                <div class="flex flex-col flex-wrap justify-center items-center lg:items-start dark:text-white mx-2">
                    <span class="text-3xl text-center lg:text-left">{{ education.almaMater }}</span>
                    <span class="text-xl text-gray-500 dark:text-gray-300">{{ education.startYear }} - {{ education.endYear }}</span>
                    <span class="italic text-gray-500 dark:text-gray-300">{{ education.course }}</span>
                    <span >CGPA: {{ education.cgpa }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import educations from '@/data/education.json'
</script>