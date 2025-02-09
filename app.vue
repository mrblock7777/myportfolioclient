<template>
  <div class="dark:bg-black lg:px-20 lg:py-4">
    <Navbar/>
    <Home/>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>
