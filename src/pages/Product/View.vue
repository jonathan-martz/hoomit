<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBackendStore } from "@/stores/backend";
import { storeToRefs } from "pinia";

const store = useBackendStore();
let { url } = storeToRefs(store);
let route = useRoute();

const load = async function () {
  const request = await fetch(url.value + "/api/products/" + route.params.id);
  const data = await request.json();
  item.value = data;
  console.log(data);
};

const getStock = async function () {
  const request = await fetch(
    url.value + "/api/products/" + route.params.id + "/stock"
  );
  const data = await request.json();
  console.log(data);
};

const buy = async function () {
  const request = await fetch(
    url.value + "/api/products/" + route.params.id + "/buy",
    {
      method: "PUT",
      body: JSON.stringify({
        id: route.params.id,
        amount: 1,
      }),
    }
  );
  const data = await request.json();
  console.log(data);
};

const refill = async function () {
  const request = await fetch(
    "http://stockmanager.mooo.com/api/products/" +
      route.params.id +
      "/refill?amount=1",
    {
      method: "PUT",
    }
  );
  const data = await request.json();
  console.log(data);
};

let item = ref({});

onMounted(function () {
  load();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">{{ item }}</v-col>
      <v-col cols="12" sm="6"
        ><v-btn @click="getStock()">getStock</v-btn>
        <v-btn @click="buy()">reserve</v-btn>
        <v-btn @click="refill()">refill</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
