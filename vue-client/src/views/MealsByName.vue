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
  <div>
    <div>
      <div v-for="meal of meals" :key="meal.idMeal">
        <img :src="meal.strMealThumb" alt="meal.strMeal"/>
        <h3>{{ meal.strMeal }}</h3>
        <div>
          <a :href="meal.strYoutube" target="_blank">Watch it on YouTube</a>
          <router-link to="/">
            View Details Page
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '@/store';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMealsByName() {
  store.dispatch('searchMealsByName', keyword.value)
}

</script>
