<template>
  <section class="navigation">
    <nav id="mobile" class="md:hidden">
    Navigation Mobile
    <fa @click="store.toggle()" icon="fa-bars" />
    </nav>
    <nav id="desktop" class="hidden md:block">Navigation Desktop</nav>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import {useNavigationStore} from '@/store/navigation';
import { storeToRefs } from "pinia";

let store = useNavigationStore();
let { open } = storeToRefs(store);
</script>