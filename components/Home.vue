<template>
    <div class="flex flex-col lg:flex-row lg:justify-between min-h-full h-screen lg:h-auto min-w-full justify-center items-center bg-cover bg-center bg-neutral-500 bg-blend-multiply lg:bg-transparent lg:bg-none  py-4"
        :class="`bg-[url('https://assets.mrblockez.com/profile.jpg')]`" id="#">
        <div class="flex flex-col items-center lg:flex lg:items-start">
            <span
                class="text-center lg:text-left text-white lg:dark:text-white lg:text-black title-text tracking-[0.2rem] text-9xl">
                <span class="text-info dark:text-lime-500">Ameer</span> <br />
                Izwan
            </span>
            <span
                class="text-white lg:text-black text-center lg:text-left text-2xl lg:dark:text-white w-3/5 block font-[Montserrat]">
                Began my journey in <span class="text-info dark:text-lime-500">Software Development</span> in 2020, I am
                passionate creating and working things with
                technology. Experienced in Web Technologies and Cloud.
            </span>
        </div>
        <div class="dark:brightness-50 hidden lg:block w-3/4 h-auto">
            <img :src="`${s3BucketURL}profile.jpg`" alt="Profile">
        </div>
    </div>
</template>
<script setup lang="ts">
const config  = useRuntimeConfig()
const s3BucketURL = computed(() => config.public.s3AssetsBucketUrl)

</script>