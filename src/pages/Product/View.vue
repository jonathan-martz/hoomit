<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBackendStore } from "@/stores/backend";
import { storeToRefs } from "pinia";

const store = useBackendStore();
let { url } = storeToRefs(store);
let route = useRoute();
let router = useRouter();

let stock = ref(0);

const load = async function () {
  const request = await fetch(url.value + "/api/products/" + route.params.id);
  const data = await request.json();
  item.value = data;
  stock.value = data.stock;
  console.log(data);
};

const update = function () {
  router.push("/product/" + route.params.id + "/edit");
};

const getStock = async function () {
  const request = await fetch(
    url.value + "/api/products/" + route.params.id + "/stock"
  );
  const data = await request.json();
  stock.value = data;
};

const buy = async function () {
  const request = await fetch(
    url.value +
      "/api/products/" +
      route.params.id +
      "/buy?amount=" +
      amount.value,
    {
      method: "PUT",
    }
  );
  const data = await request.json();
  stock.value = data.stock;
  console.log(data);
};

const refill = async function () {
  const request = await fetch(
    url.value +
      "/api/products/" +
      route.params.id +
      "/refill?amount=" +
      amount.value,
    {
      method: "PUT",
    }
  );
  const data = await request.json();
  stock.value = data.stock;
  console.log(data);
};

let item = ref({});

let amount = ref(1);

onMounted(function () {
  load();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-img
          aspect-ratio="16/9"
          cover
          src="https://via.placeholder.com/480x320.png?text=Hoom+IT"
        ></v-img>
        <h2>{{ item.name }}</h2>
        <p>Stock: {{ stock }}</p>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus reprehenderit, enim itaque asperiores, accusamus esse
          dicta perspiciatis, exercitationem nisi debitis maxime accusantium
          laudantium quasi ullam repellendus id provident odio illo?
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus reprehenderit, enim itaque asperiores, accusamus esse
          dicta perspiciatis, exercitationem nisi debitis maxime accusantium
          laudantium quasi ullam repellendus id provident odio illo?
        </p>
        <v-btn @click="getStock()" class="mx-2">getStock</v-btn>
        <v-btn @click="buy()" variant="outlined" class="mx-2">reserve</v-btn>
        <section class="refill my-2">
          <v-btn @click="refill()" variant="tonal" class="mx-2">refill</v-btn>
          <input type="number" v-model="amount" class="text-right px-2 py-2" />
        </section>
        <v-btn @click="update()" class="mx-2"><fa icon="edit" class="2x" /></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
