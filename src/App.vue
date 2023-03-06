<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import NavigationContent from "@/components/NavigationContent.vue";
</script>

<template>
  <section class="app bg-gray-400 min-h-screen pt-2">
    <Header />
    <NavigationContent/>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2">
      <router-view></router-view>
    </main>
    <Footer />
  </section>
</template>
