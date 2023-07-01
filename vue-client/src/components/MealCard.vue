<template>
  <div class="bg-white shadow-lg pb-2">
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
          :src="meal.strMealThumb"
          alt="meal.strMeal"
          class="h-[60%] object-cover w-full"
        />        
      </router-link>

      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p>loren ipsum por loin pollerita flank steak bacon, mashed potatoes with garlic butter.</p>
        <div class="mt-4 grid grid-rows-3 grid-cols-1">
          
          <YoutubeButton class="mx-auto my-0"
            :href="meal.strYoutube"
          >View on Youtube
          </YoutubeButton>

          <router-link 
            :to="{name: 'mealDetails', params: {id: meal.idMeal}}" 
            class="rounded border border-blue-700 bg-blue-400 px-2 py-2 hover:bg-blue-600 text-white mt-1 w-[50%] mx-auto my-0 text-center"
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

</script>