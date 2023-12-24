// import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// import VueRouter from 'vue-router';
import pfe_detail from '../components/pfe_detail.vue';
import landing_page from '../components/landing_page.vue';
import outsourcing_detail from '../components/outsourcing_detail.vue';
import stage_detail from '../components/stage_detail.vue';

// import App from './App.vue';
// Vue.use(VueRouter);

const routes = [
  {
    path: '/stage_detail',
    component: stage_detail,
    name: 'stage_detail',
  },
  {
    path: '/outsourcing_detail',
    component: outsourcing_detail,
    name: 'outsourcing_detail',
  },
  {
    path: '/pfe_detail',
    component: pfe_detail,
    name: 'pfe_detail',
  },
  {
    path: '/',
    component:landing_page,
    name: 'landing_page',
  }
  // Add more routes if needed
];









const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
