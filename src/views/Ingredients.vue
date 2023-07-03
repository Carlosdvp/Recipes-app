<template>
  <h1 class="text-2xl font-bold text-center mb-5 pt-3">
    Ingredients
  </h1>
  <div class="flex flex-col p-8">
    <input 
      type="text"
      v-model="keyword"
      class="border-2 border-gray-200 w-[80%] mx-auto my-0"
      placeholder="Search for Ingredients"
    >
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-7 p-9 h-full">
    <a
      href="#"
      @click.prevent="openIngredient(ingredient)"
      v-for="ingredient of computedIngredients" 
      :key="ingredient.idIngredient" 
      class="block bg-white shadow-lg p-3"
    >
      <h3 class="text-2xl font-semibold mb-3">{{ ingredient.strIngredient }}</h3>
    </a>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store';
import axiosClient from '@/axiosClient.js';

const router = useRouter();
const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;

  return ingredients.value.filter((item) => 
    item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
});

function openIngredient(ingredient) {
  store.commit('SET_INGREDIENT', ingredient)

  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient },
  })
};

onMounted(() => {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
      ingredients.value = data.meals;
    })
});

</script>