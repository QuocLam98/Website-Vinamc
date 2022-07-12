<script setup lang="ts">
import Background from '@/assets/img/backrpg.png'
</script>

<template>

<div :style="'background-image: url('+Background+')'">
<slot />
</div>

</template>

