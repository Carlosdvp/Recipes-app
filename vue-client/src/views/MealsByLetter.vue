<template>
  <h1 class="text-2xl font-bold text-center py-5">Search Recipes By Letter</h1>
  <div class="flex justify-center gap-2 pt-4">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import Meals from '@/components/Meals.vue'

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
});

</script>
