<template>
  <header>
    <v-header>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6"><Logo /></v-col>
          <v-col cols="12" sm="6">
            <Navigation />
          </v-col>
        </v-row> </v-container
    ></v-header>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<style scoped>
nav {
  float: right;
}
</style>
