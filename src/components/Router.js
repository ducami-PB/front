import { createMemoryHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./Mainpage.vue') },
  { path: '/Login', component: () => import('./Login.vue') },
  { path: '/Signup', component: () => import('./Signup.vue') },
  { path: '/Bookmark', component: () => import('./Bookmark.vue') },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
