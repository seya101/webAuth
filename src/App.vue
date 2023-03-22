<template>
  <section class="h-screen">
   
      <RouterView/>
   

    <Footer />
  </section>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import { RouterView, RouterLink } from 'vue-router'
</script>


