<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="form">
          <h2 class="mb-3">Update Item ({{ route.params.id }})</h2>
          <v-text-field
            v-model="name"
            label="First name"
            required
          ></v-text-field>
          <v-text-field v-model="id" label="Id"></v-text-field>
          <v-text-field v-model="stock" label="Stock"></v-text-field>
          <v-btn @click="update()" class="mx-2">Update</v-btn>
        </div></v-col
      ></v-row
    ></v-container
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useBackendStore } from "@/stores/backend";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const store = useBackendStore();
let { url } = storeToRefs(store);
let route = useRoute();

let id = ref(route.params.id);
let stock = ref(1337);
let name = ref("Jonathan Martz");

const update = async function () {
  const request = await fetch(url.value + "/api/products/update", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id.value,
      name: name.value,
      stock: stock.value,
      reservations: [],
    }),
  });
  const data = await request.json();
  console.log(data);
};
</script>
