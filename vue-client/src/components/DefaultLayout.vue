<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="bg-gray-200">
      <router-view />
    </main>
  </div>
</template>
