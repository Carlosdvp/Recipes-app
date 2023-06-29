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
</template>

<script setup>
import { ref } from 'vue';
import axiosClient from '@/axiosClient.js';
import store from '@/store';

const keyword = ref('');

function searchMealsByName() {
  store.dispatch('searchMealsByName')
}

</script>
