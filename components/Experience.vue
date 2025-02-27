<template>
    <div class="my-4">
        <span class="text-7xl my-2 text-info dark:text-lime-500 mx-4 lg:mx-0 title-text">Experience</span>
        <span class="hidden lg:block my-2 dark:text-white">Click on the <span class="text-info dark:text-lime-500">dates</span> to show
            details</span>
        <span class="block lg:hidden my-2 dark:text-white mx-4">Tap on the <span class="text-info dark:text-lime-500">dates</span> to show
            details</span>
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
        // content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum neque a sapien commodo rhoncus. Donec commodo pharetra dolor sit amet placerat. Sed enim dolor, pharetra sit amet facilisis id, congue in neque. Pellentesque malesuada metus neque, porttitor ullamcorper ipsum finibus sit amet. Fusce blandit faucibus nulla, eget pretium purus faucibus vehicula. Pellentesque condimentum convallis mi et venenatis. Integer scelerisque ac tortor id imperdiet. Curabitur vulputate tortor ut sapien finibus imperdiet et ac ante. Maecenas blandit neque varius imperdiet tincidunt. ',
        content: {
            summary: 'Provision and manage Joget application on various platform',
            details: [
                'Provided support for Joget on AWS Elastic Kubernetes Service(EKS)',
                'Reduced the amount of bot attacks to the Knowledge Base after migrating to Cloudfront and WAF',
            ],
            skills: [
                'AWS',
                'Kubernetes',
                'Linux',
                'Bash'
            ]
        },
        showLongContent: false
    },
    {
        company: 'Hiredly',
        position: 'DevOps Engineer',
        date: 'Oct 2022 - Feb 2023',
        logo: 'hiredly.webp',
        content: {
            summary: 'Short stint in Hiredly, but no short in cost savings made',
            details: [
                'Reduced Chatbot cost to virtually $0 per month by migrating to AWS Lambda from Elixir',
                'Reduced cost to run backend through migration from Heroku to AWS Elastic Container Service(ECS)'
            ],
            skills: [
                'AWS',
                'Lambda',
                'Python',
                'Elastic Container Service(ECS)'
            ]
        },
        showLongContent: false
    },
    {
        company: 'ECloudValley Technology',
        position: 'Cloud Developer',
        date: 'Jun 2021 - Oct 2022',
        logo: 'ecv.webp',
        content: {
            summary: 'Developed various systems for internal users and clients',
            details: [
                'Developed Order Management System and integrated API for PureGo - Online Grocery system',
                'Developed high availability logging system with ELK(Elasticsearch, Logstash, and Kibana) stack on AWS Elastic Kubernetes Service(EKS)'
            ],
            skills: [
                'AWS',
                'VueJS',
                'Lambda',
                'EKS'
            ]
        },
        showLongContent: false
    },
    {
        company: 'Axrail',
        position: 'Software Engineer',
        date: 'Aug 2020 - Apr 2021',
        logo: 'axrail.png',
        content: {
            summary: 'Breakthrough to Software Development and Cloud journey',
            details: [
                'Developed Admin Portal for FamilyMart to manage inventories and stocks',
                'Reduced engineers overhead by automating the deployment using CodePipeline'
            ],
            skills: [
                'AWS',
                'React',
                'Lambda',
                'Codepipeline',
                'DynamoDB'
            ]
        },
        showLongContent: false
    },

])

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