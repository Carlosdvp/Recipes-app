<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold text-center my-5">Random Recipes</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '@/axiosClient.js'
import Meals from '@/components/Meals.vue';

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    await axiosClient.get('/random.php').then(({ data }) => meals.value.push(data.meals[0]));
  }
});

</script>
