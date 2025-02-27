<template>
    <div class="flex flex-wrap items-center justify-center lg:justify-start py-2  lg:h-screen ">
        <span
            class="text-center lg:text-left text-white lg:dark:text-white lg:text-black name w-1/2 tracking-[0.2rem] text-9xl title">
            <span class="flex justify-center text-info dark:text-lime-500 word-break text-center">
                Keep In Touch
            </span>
        </span>
        <div class></div>
        <div class="flex flex-col">
            <span class="dark:text-white font-[Montserrat] text-3xl"> Find <span
                    class="text-info dark:text-lime-500">more</span> about me here!</span>
            <a v-for="contact in contacts" :href="contact.link" target="_blank"
                class="flex items-center text-black dark:text-white">
                <MdiIcon class="text-7xl" :icon="contact.icon" />
                <span>{{ contact.name }}</span>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
const contacts = ref([
    {
        name: 'Github',
        icon: 'mdiGithub',
        link: 'https://github.com/mrblock7777'
    },
    {
        name: 'Linkedin',
        icon: 'mdiLinkedin',
        link: 'https://www.linkedin.com/in/ameer-izwan-7bb76a18b'
    },
    {
        name: 'Resume',
        icon: 'mdiNote',
        link: 'https://assets.mrblockez.com/resume-2025.pdf'
    },
    {
        name: 'Email',
        icon: 'mdiGmail',
        link: 'mailto:mrblock7777@gmail.com'
    }
] as const) 
</script>
<style scoped>
.title {
    font-family: 'Bebas Neue', cursive;
}

.word-break {
    word-spacing: 10000px;
}
</style>