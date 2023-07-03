<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-7 p-9">
    <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-500 p-8">
    There are no Recipes
  </div>
</template>

<script setup>
import MealCard from '@/components/MealCard.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => []
  }
});

</script>
