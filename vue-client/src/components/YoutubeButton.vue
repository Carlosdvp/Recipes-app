<template>
  <a 
    :href="href"
    target="_blank"
    class="rounded border border-blue-700 bg-blue-400 px-3 py-2 hover:bg-blue-600 text-white"
  >
    <slot></slot>
  </a>
</template>

<script setup>

const props = defineProps({
  href: String,
})
</script>