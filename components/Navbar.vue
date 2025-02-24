<template>
    <div class="flex sticky top-0 bg-white dark:bg-neutral-700">
        <div class="w-full">
            <nav class="border border-gray-200 dark:border-neutral-700 rounded-lg px-4 py-6 w-full flex items-center justify-center md:justify-between dark:text-white dark:bg-neutral-900">
                <div class="flex-none text-xl md:text-4xl">
                    <AIM/>
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