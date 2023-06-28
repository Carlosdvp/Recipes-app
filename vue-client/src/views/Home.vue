<template>
  <h1 class="text-4xl font-bold text-center my-5">Recipes</h1>
  <div class="flex flex-col p-8">
    <input type="text" class="border-2 border-gray-200 w-[80%] mx-auto my-0" placeholder="Search for Recipes">
    <div class="flex justify-center gap-2 pt-4">
      <router-link to="/" v-for="letter of letters">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>
