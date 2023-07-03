<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="bg-gray-200">
      <div class="max-w-[1200px] mx-auto">
        <router-view />       
      </div>
    </main>
  </div>
</template>
