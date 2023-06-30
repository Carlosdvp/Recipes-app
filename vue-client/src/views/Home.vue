<template>
  <h1 class="text-4xl font-bold text-center my-5">Recipes</h1>
  <div class="flex flex-col p-8">

    <input type="text" class="border-2 border-gray-200 w-[80%] mx-auto my-0" placeholder="Search for Recipes">

    <MealsByLetter />

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '@/axiosClient.js'
import MealsByLetter from './MealsByLetter.vue';


const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response.data.meals);
  ingredients.value = response.data;
});

</script>
