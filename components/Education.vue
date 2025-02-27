<template>
    <div>
        <span class="text-7xl my-2 text-info dark:text-lime-500 mx-4 lg:mx-0 title-text">Education</span>
        <div class="flex flex-wrap justify-between my-5">
            <div class="flex flex-wrap justify-center lg:justify-normal" v-for="education in educations">
                <img class="h-60 lg:mx-6 lg:my-0 my-6" :src="$config.public.s3AssetsBucketUrl + education.logo" :alt="education.almaMater">
                <div class="flex flex-col flex-wrap justify-center dark:text-white">
                    <span class="text-3xl">{{ education.almaMater }}</span>
                    <span class="text-xl text-gray-500 dark:text-gray-300">{{ education.startYear }} - {{ education.endYear }}</span>
                    <span class="italic text-gray-500 dark:text-gray-300">{{ education.course }}</span>
                    <span >CGPA: {{ education.cgpa }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const educations = ref([
    {
        almaMater: 'Universiti Putra Malaysia',
        startYear: '2016',
        endYear: '2020',
        logo: 'upm.jpg',
        course: 'Bachelor of Software Engineering',
        cgpa: '3.23'
    },
    {
        almaMater: 'Kolej Matrikulasi Negeri Sembilan',
        startYear: '2015',
        endYear: '2016',
        logo: 'kmns.png',
        course: 'Module 2',
        cgpa: '3.94'
    },
])
</script>