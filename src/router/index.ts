import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes } from "./routes";
const router = createRouter({
  //hash模式的url上有#号
  //history: createWebHashHistory(),
  history: createWebHistory(),
  routes: routes,
  //使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
