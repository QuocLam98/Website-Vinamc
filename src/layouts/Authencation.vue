<script setup lang="ts">
import Background from '@/assets/img/backrpg.png'
import Header from '@/components/Header.vue'
</script>

<template>
<Header />
<div :style="'background-image: url('+Background+')'">
<slot />
</div>

</template>

