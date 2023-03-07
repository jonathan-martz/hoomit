<template>
  <section class="homepage">
    <h2 class="font-bold text-lg">
      Willkommen auf der Startseite dieses Projektes
    </h2>
    <p>
      Dieses Repo dient zur Bewerbung von Jonathan Martz bei der HoomIt
      Solutions GmbH
    </p>
  </section>
  <section class="product-grid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" v-for="product in products">
          <ProductCard :identifier="product.id" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([]);

const load = async function () {
  const request = await fetch("http://stockmanager.mooo.com/api/products");
  const data = await request.json();
  products.value = data.slice(-9);
};

onMounted(function () {
  load();
});
</script>
