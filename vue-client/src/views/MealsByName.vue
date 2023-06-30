<template>
  <div class="flex p-8"> 
    <input 
      type="text"
      v-model="keyword"
      class="border-2 border-gray-200 w-[80%] mx-auto my-0"
      placeholder="Search for recipes by name"
      @change="searchMealsByName"
    >
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-7 p-9">
    <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';
import MealCard from '@/components/MealCard.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMealsByName() {
  store.dispatch('searchMealsByName', keyword.value)
}

//let's keep the last search results on the page through page reloads
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMealsByName()
  }
})

</script>
