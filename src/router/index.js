import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ProductView from '@/pages/Product/View.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductView },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;