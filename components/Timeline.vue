<template>
    <ul class="timeline timeline-vertical justify-center h-screen">
        <li class="flex-grow" v-for="(item, i) in props.items">
            <hr v-if="i > 0" />
            <div :class="isEven(i) ? 'timeline-start' : 'timeline-end'"
                class="timeline-box hover:bg-gray-200 hover:cursor-pointer"
                @click="$emit('toggleContent', { show: !item.showLongContent, index: i })">{{ item.date }}
            </div>
            <div class="timeline-middle">
                <MdiIcon icon="mdiCheckCircle" />
            </div>
            <div :class="isEven(i) ? 'timeline-end' : 'timeline-start'">
                <img class="w-64 lg:w-96 h-auto my-6" :src="s3BucketURL + item.logo" :alt="item.company">
                <span class="text-black dark:text-white" v-show="item.showLongContent">
                    {{ item.content.summary }}
                    <ul class="mx-4 my-2 marker:text-info dark:marker:text-lime-500">
                        <li class="list-disc " v-for="detail in item.content.details">
                            {{ detail }}
                        </li>
                    </ul>
                </span>
            </div>
            <hr v-if="i < items.length - 1" />
        </li>
    </ul>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
interface Props {
    items: Array<{
        date: string,
        logo: string,
        company: string,
        content: Record<string, any>,
        showLongContent: boolean
    }>
}
const props = defineProps<Props>()
const s3BucketURL = computed(() => config.public.s3AssetsBucketUrl)

const isEven = (i: number) => {
    return i % 2 == 0
}
</script>