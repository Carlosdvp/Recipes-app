<template>
  <h1 class="text-2xl font-bold text-center pt-3">Search By Name</h1>
  <div class="flex p-8">
    <input 
      type="text"
      v-model="keyword"
      class="border-2 border-gray-200 w-[80%] mx-auto my-0"
      placeholder="Search for recipes by name"
      @change="searchMealsByName"
    >
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import Meals from '@/components/Meals.vue';

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
