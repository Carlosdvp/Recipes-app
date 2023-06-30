<template>
  <div class="w-[70%] mx-auto">
    <h1 class="text-3xl font-bold py-5 self-center flex justify-center">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="h-[50vh] mx-auto rounded-full">
    <div class="flex justify-between py-5 text-lg">
      <h3><strong>Category:</strong> {{ meal.strCategory }}</h3>
      <h3><strong>Area:</strong> {{ meal.strArea }}</h3>
      <h3><strong>Tags:</strong> {{ meal.strTags }}</h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <p v-for="(item, index) of new Array(20)" class="ml-6 pb-1">
            <li v-if="meal[`strIngredient${index+1}`]" class="list-disc">
              {{ meal[`strIngredient${index+1}`] }}
            </li>           
          </p>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-3">Measures</h2>
        <ul>
          <p v-for="(item, index) of new Array(20)" class="ml-6 pb-1">
            <li v-if="meal[`strMeasure${index+1}`]" class="list-disc">
              {{ meal[`strMeasure${index+1}`] }}
            </li>           
          </p>
        </ul>
      </div>
    </div>

    <div class="py-10">
      <h2 class="text-xl font-semibold">Instructions</h2>
      <p class="py-6">{{ meal.strInstructions }}</p>
      <YoutubeButton 
        :href="meal.strYoutube"
        class="w-[70%] mx-auto text-center"
      >
        View Recipe on YouTube
      </YoutubeButton>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '@/axiosClient.js';
import YoutubeButton from '@/components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
      console.log(meal.value)
    })
})
</script>