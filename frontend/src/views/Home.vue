<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div>
    <h1>Hi {{ user.firstName }}</h1>
    <p>You are logged in.</p>

    <!-- Add this when the routes and components for the recipes are ready <router-link to="/recipes">View Recipes</router-link> -->
    <p>Recipes</p>
  </div>
</template>
