import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/login',
        name: '登录页',
        component: () => import('../views/login/index.vue'),
    }
];
