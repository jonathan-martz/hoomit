<template>
  <section class="homepage mx-a text-center">
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
        <v-col v-for="product in products" :key="product.id" cols="12" sm="4">
          <ProductCard :identifier="product.id" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products: Product[] = ref([]);

interface Product {
  name: string;
  id: number;
  stock: number;
  reservations: number;
}

const load = async function () {
  const request = await fetch("http://stockmanager.mooo.com/api/products");
  const data = await request.json();
  // @ts-ignore
  products.value = data.slice(-9);
};

onMounted(function () {
  load();
});
</script>
