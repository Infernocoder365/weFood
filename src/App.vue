<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import ToastPlugin from 'vue-toast-notification';
import HeaderComponent from './layout/HeaderComponent.vue'
import FooterComponent from './layout/FooterComponent.vue'
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: black;
}

#app {
  min-height: 100vh;
}
</style>
