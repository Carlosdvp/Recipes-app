<template>
  <h1 class="text-4xl text-center my-5">Home</h1>
  <p>{{ meals }}</p>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'

const meals = computed(() => store.state.meals);

</script>
