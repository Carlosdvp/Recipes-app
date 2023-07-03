<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="h-[100vh] bg-gray-200">
      <router-view />
    </main>
  </div>
</template>
