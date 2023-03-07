import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ProductView from '@/pages/Product/View.vue';
import ProductUpdate from '@/pages/Product/Update.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductView },
    { path: '/product/:id/edit', component: ProductUpdate },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;