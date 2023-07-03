<template>
  <a 
    :href="href"
    target="_blank"
    class="rounded border border-blue-700 bg-blue-400 px-3 p-2 hover:bg-blue-600 text-white"
  >
    <slot>Youttube video</slot>
  </a>
</template>

<script setup>

const props = defineProps({
  href: String,
})
</script>