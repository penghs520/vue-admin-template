import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',//命名路由，做权限时用到
        //路由懒加载
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
    },
    {
        // 任意不合法的路径将重定向到 404页面
        path: '/:pathMatch(.*)*',
        name: 'any',
        redirect: "/404"
    }
];
