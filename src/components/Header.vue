<template>
  <header>
    <v-footer>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6"><Logo /></v-col>
          <v-col cols="12" sm="6" justify="end">
            <nav>
              <router-link class="pa-4" to="/">Startseite</router-link>
              <router-link to="/product/993">Produkt</router-link>
            </nav>
          </v-col>
        </v-row>
      </v-container></v-footer
    >
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo.vue";
</script>

<style scoped>
nav {
  float: right;
}
</style>
