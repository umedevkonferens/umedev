import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Program from '../views/Program.vue';
import Kidz from '../views/Kidz.vue';
import CFP from '../views/CFP.vue';
import CFPThankYou from '../views/CFP_2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/program',
    name: 'program',
    component: Program,
  },
  {
    path: '/kidz',
    name: 'kidz',
    component: Kidz,
  },
  {
    path: '/cfp',
    name: 'cfp',
    component: CFP,
  },
  {
    path: '/cfp_thankyou',
    name: 'cfp_thankyou',
    component: CFPThankYou,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
