import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import { register } from 'register-service-worker';


Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect:'/money'
},
{
  path: '/money',
  component: Money
},
{
  path: '/labels',
  component: Labels
}, {
  path: '/statistics',
  component: Statistics
},
]

const router = new VueRouter({
  routes
})

export default router