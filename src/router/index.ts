import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Program from '../views/Program.vue';
import Kidz from '../views/Kidz.vue';
import cfp from '../views/CFP.vue';
import Sponsring from '../views/Sponsring.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import Register from '../views/Register.vue';
import EditRegister from '../views/EditRegister.vue';

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
    component: cfp,
  },
  {
    path: '/sponsra',
    name: 'sponsra',
    component: Sponsring,
  },
  {
    path: '/integritetspolicy',
    name: 'integritetspolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/anmalan',
    name: 'anmalan',
    component: Register,
  },
  { path: '/anmalan/:id', name: 'edit-anmalan', component: EditRegister },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
