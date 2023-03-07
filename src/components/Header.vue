<template>
  <header>
    <v-footer>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6"><Logo /></v-col>
          <v-col cols="12" sm="6" class="justify-end">
            <nav>
              <router-link to="/">Startseite</router-link>
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
