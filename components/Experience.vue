<template>
    <div class="my-4">
        <span class="text-5xl">Experience</span>
        <hr />
        <Timeline :items="experiences" @toggle-content="toggleContent" />
    </div>
</template>
<script setup lang="ts">
const experiences = ref([
    {
        company: 'Joget',
        position: 'Cloud Engineer',
        date: 'Mar 2023 - Present',
        logo: 'joget.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum neque a sapien commodo rhoncus. Donec commodo pharetra dolor sit amet placerat. Sed enim dolor, pharetra sit amet facilisis id, congue in neque. Pellentesque malesuada metus neque, porttitor ullamcorper ipsum finibus sit amet. Fusce blandit faucibus nulla, eget pretium purus faucibus vehicula. Pellentesque condimentum convallis mi et venenatis. Integer scelerisque ac tortor id imperdiet. Curabitur vulputate tortor ut sapien finibus imperdiet et ac ante. Maecenas blandit neque varius imperdiet tincidunt. ',
        showLongContent: false
    },
    {
        company: 'Hiredly',
        position: 'DevOps Engineer',
        date: 'Oct 2022 - Feb 2023',
        logo: 'hiredly.webp',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum neque a sapien commodo rhoncus. Donec commodo pharetra dolor sit amet placerat. Sed enim dolor, pharetra sit amet facilisis id, congue in neque. Pellentesque malesuada metus neque, porttitor ullamcorper ipsum finibus sit amet. Fusce blandit faucibus nulla, eget pretium purus faucibus vehicula. Pellentesque condimentum convallis mi et venenatis. Integer scelerisque ac tortor id imperdiet. Curabitur vulputate tortor ut sapien finibus imperdiet et ac ante. Maecenas blandit neque varius imperdiet tincidunt. ',
        showLongContent: false
    },
    {
        company: 'ECloudValley Technology',
        position: 'Cloud Developer',
        date: 'Jun 2021 - Oct 2022',
        logo: 'ecv.webp',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum neque a sapien commodo rhoncus. Donec commodo pharetra dolor sit amet placerat. Sed enim dolor, pharetra sit amet facilisis id, congue in neque. Pellentesque malesuada metus neque, porttitor ullamcorper ipsum finibus sit amet. Fusce blandit faucibus nulla, eget pretium purus faucibus vehicula. Pellentesque condimentum convallis mi et venenatis. Integer scelerisque ac tortor id imperdiet. Curabitur vulputate tortor ut sapien finibus imperdiet et ac ante. Maecenas blandit neque varius imperdiet tincidunt. ',
        showLongContent: false
    },
    {
        company: 'Axrail',
        position: 'Software Engineer',
        date: 'Aug 2020 - Apr 2021',
        logo: 'axrail.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum neque a sapien commodo rhoncus. Donec commodo pharetra dolor sit amet placerat. Sed enim dolor, pharetra sit amet facilisis id, congue in neque. Pellentesque malesuada metus neque, porttitor ullamcorper ipsum finibus sit amet. Fusce blandit faucibus nulla, eget pretium purus faucibus vehicula. Pellentesque condimentum convallis mi et venenatis. Integer scelerisque ac tortor id imperdiet. Curabitur vulputate tortor ut sapien finibus imperdiet et ac ante. Maecenas blandit neque varius imperdiet tincidunt. ',
        showLongContent: false
    },

])

const currentShowIndex = ref(-1)

const toggleContent = ({ show, index }: { show: boolean, index: number }) => {
    console.log(show, index)
    experiences.value[index] = {...experiences.value[index], showLongContent: show}
    if(currentShowIndex.value >= 0){
        experiences.value[currentShowIndex.value] = {...experiences.value[currentShowIndex.value], showLongContent: false}
    }
    currentShowIndex.value = index
}
</script>