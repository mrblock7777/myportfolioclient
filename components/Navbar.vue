<template>
    <div class="flex w-screen py-4">
        <div class="w-full px-20">
            <nav class="border border-gray-200 rounded-lg px-4 py-6 w-full flex items-center justify-between">
                <div class="flex-none text-4xl">
                    Ameer Izwan
                </div>
                <div class="flex gap-x-10 text-xl font-[Montserrat]">
                    <a :href="'/#'+section.id" v-for="section in sections">{{ section.name }}</a>
                </div>
                <div>
                    <a href="/#contact" class="border border-blue-500 rounded-sm px-4 py-2 bg-blue-500 text-white">Contact Me</a>
                </div>
            </nav>
        </div>
    </div>
</template>
<script setup lang="ts">
const sections = ref([
    {
        name: 'About',
        id: 'about'
    },
    {
        name: 'Experience',
        id: 'experience'
    },
    {
        name: 'Education',
        id: 'education'
    }
])
</script>