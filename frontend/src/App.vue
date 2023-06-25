<script setup>
import Navbar from './components/Navbar.vue';
import Alert from './components/Alert.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="app-container" :class="authStore.user && 'bg-light'">
    <Navbar></Navbar>
    <Alert />
    <div class="container pt-4 pb-4">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
@import '@/assets/base.css'
</style>
