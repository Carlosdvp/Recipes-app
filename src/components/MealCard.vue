<template>
  <div class="bg-white shadow-lg">
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
          :src="meal.strMealThumb"
          alt="meal.strMeal"
          class="h-[60%] object-cover w-full"
        />        
      </router-link>

      <div class="px-3">
        <h3 class="font-bold p-4 text-2xl">{{ meal.strMeal }}</h3>
        <p>{{ truncateWords(meal.strInstructions, 20) + ' ...' }}</p>
        <div class="flex items-center justify-evenly pt-4">
          
          <YoutubeButton :href="meal.strYoutube" />

          <router-link 
            :to="{name: 'mealDetails', params: {id: meal.idMeal}}" 
            class="rounded border border-blue-700 bg-blue-400 p-2 hover:bg-blue-600 text-white text-center"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
</template>

<script setup>
import YoutubeButton from '@/components/YoutubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})

function truncateWords(string, wordCount) {
  if (!string) return " ";

  return string.split(" ").slice(0, wordCount).join(" ");
}

</script>