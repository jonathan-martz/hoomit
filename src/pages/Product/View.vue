<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

let route = useRoute();

const load = async function () {
  const request = await fetch(
    "http://stockmanager.mooo.com/api/products/" + route.params.id
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

<template>{{ item }}</template>
