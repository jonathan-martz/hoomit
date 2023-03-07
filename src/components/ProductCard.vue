<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  identifier: {
    required: true,
    type: Number,
  },
});

const load = async function () {
  const request = await fetch(
    "http://stockmanager.mooo.com/api/products/" + props.identifier
  );
  const data = await request.json();
  item.value = data;
  console.log(data);
};

let item = ref({});

onMounted(function () {
  load();
});
</script>

<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <router-link :to="'/product/' + props.identifier">
        <img src="https://via.placeholder.com/480x320.png?text=Hoom+IT" alt="">
      </router-link>
      <h2>{{ item.name }}</h2>
      <p class="text--primary">
        relating to or dependent on charity; charitable.<br />
        "an eleemosynary educational institution."
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="teal-accent-4"> Learn More </v-btn>
    </v-card-actions>
  </v-card>
</template>
