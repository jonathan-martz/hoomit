<template>
  <header class="mx-auto max-w-5xl bg-white px-2 py-2 flex justify-between">
    <Logo />
    <Navigation />
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
// @ts-ignore
import {useNavigationStore} from '@/store/navigation';
import { storeToRefs } from "pinia";

let store = useNavigationStore();
let { open } = storeToRefs(store);
</script>
