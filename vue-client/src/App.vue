<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="bg-gray-200 h-full">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>
