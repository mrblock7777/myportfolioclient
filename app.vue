<template>
  <div class="bg-white dark:bg-black lg:px-20 lg:py-4">
    <Navbar/>
    <Home/>
    <Experience id="experience"/>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'light'
</script>
