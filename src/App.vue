<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Mainpage</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Signup">Signup</router-link> |
      <router-link to="/Bookmark">Bookmark</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
</style>
