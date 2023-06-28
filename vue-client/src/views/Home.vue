<template>
  <h1 class="text-4xl font-bold text-center my-5">Recipes</h1>
  <div class="flex flex-col p-8">

    <input type="text" class="border-2 border-gray-200 w-[80%] mx-auto my-0" placeholder="Search for Recipes">

    <div class="flex justify-center gap-2 pt-4">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>

    <pre>{{  }}</pre>

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '@/store'
import axiosClient from '@/axiosClient.js'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response.data.meals);
  ingredients.value = response.data;
});

</script>
