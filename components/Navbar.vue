<template>
    <div class="flex w-screen py-4">
        <div class="w-full px-20">
            <nav class="border border-gray-200 rounded-lg px-4 py-6 w-full flex items-center justify-center md:justify-between">
                <div class="flex-none text-xl md:text-4xl">
                    A.I.M
                </div>
                <div class="mx-2 md:hidden">
                    <Dropdown>
                        <a class="hover:bg-gray-200 text-lg px-4 py-2" :href="'/#' + section.id" v-for="section in sections">{{ section.name }}</a>
                    </Dropdown>
                </div>
                <div class="hidden md:flex gap-x-10 text-xl font-[Montserrat]">
                    <a :href="'/#'+section.id" v-for="section in sections">{{ section.name }}</a>
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
    },
    {
        name: 'Contact',
        id: 'contact'
    }
])
</script>