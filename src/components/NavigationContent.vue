<template>
  <section
    class="navigation-content mx-auto max-w-5xl bg-white px-2 py-2 mt-2 md:hidden"
    v-if="open"
  >
    <div class="grid grid-cols-6">
      <div class="col-span-3 sm:col-span-2">Test</div>
      <div class="col-span-3 sm:col-span-2">Test</div>
    </div>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import { useNavigationStore } from "@/store/navigation";
import { storeToRefs } from "pinia";

let store = useNavigationStore();
let { open } = storeToRefs(store);
</script>
