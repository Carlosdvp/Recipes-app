<template>
  <h1 class="text-2xl font-bold text-center mb-5 pt-3">
    Recipes with {{ ingredient.strIngredient }}
  </h1>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue';

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
});

</script>
