<script setup>

</script>

<template>
  <div class="bg-gray-200 h-full">
    <header class="bg-amber-50 shadow-lg h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full ml-4 font-bold text-2xl">
        Home
      </router-link>
      <div class="flex items-center gap-1 font-semibold">
      <router-link to="/" class="inline-flex items-center px-2 h-full hover:bg-teal-500 hover:text-white">
        Search Meals
      </router-link>
      <router-link to="/" class="inline-flex items-center px-2 h-full hover:bg-teal-500 hover:text-white">
        Meals by Letter
      </router-link>
      <router-link to="/" class="inline-flex items-center px-2 h-full hover:bg-teal-500 hover:text-white mr-2">
        Meals by Ingredient
      </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
