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
    <div 
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow-lg"
    >
      <img 
        :src="meal.strMealThumb"
        alt="meal.strMeal"
        class="h-[60%] object-cover w-full"
      />
      <div class="px-3 pt-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p>loren ipsum por loin pollerita flank steak bacon, mashed potatoes with garlic butter. Tomahawk steak, ribs in honey glaze.</p>
        <div class="mt-4 flex justify-evenly">
          <a 
            :href="meal.strYoutube" target="_blank"
            class="rounded border border-blue-700 bg-blue-400 px-3 py-2 hover:bg-blue-600 text-white"
          >
            Watch on YouTube
          </a>
          <router-link to="/" 
            class="rounded border border-blue-700 bg-blue-400 px-3 py-2 hover:bg-blue-600 text-white"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';

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
