<template>
  <h1 class="text-2xl font-bold text-center mb-5 pt-3">Search Recipes by Ingredient</h1>
  <div class="flex flex-col p-8">
    <input type="text" class="border-2 border-gray-200 w-[80%] mx-auto my-0" placeholder="Search for Recipes">
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-7 p-9">
    <router-link
      :to="{name: 'byIngredient', params: { ingredient: ingredient.idIngredient }}"
      v-for="ingredient of ingredients" 
      :key="ingredient.idIngredient" 
      class="block bg-white shadow-lg p-3"
    >
      <h3 class="text-2xl font-semibold mb-3">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '@/axiosClient';

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get(`list.php?i=list`)
    .then(({ data }) => {
      ingredients.value = data.meals;
    })
})

</script>
