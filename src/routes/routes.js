import SideBar from '../components/sidebar.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Header from '../components/header.vue'
import Home from '../components/home.vue'
import Recensement from '../components/recensement.vue'
import CatRecensement from '../components/categorie_recensement.vue'
import AgentRecensement from '../components/liste_agent.vue'
import Recensementeffectue from '../components/recensement_effectue.vue'
import RapportRecensement from '../components/rapportrecensement.vue'
import Profil from '../components/profil.vue'
import AddRecensement from '../components/add_recensement.vue'
import AddCatRecensement from '../components/addcatrecensement.vue'
import AddAgent from '../components/addagent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/sidebar', component: SideBar, props: true},
    {path: '/', component: Login, props: true},
    {path: '/register', component: Register, props: true},
    {path: '/header', component: Header, props: true},
    {path: '/home', component: Home, props: true},
    {path: '/recensement', component: Recensement, props: true},
    {path: '/categorirecensement', component: CatRecensement, props: true},
    {path: '/agentrecensement', component: AgentRecensement, props: true},
    {path: '/recensementeffectue', component: Recensementeffectue, props: true},
    {path: '/rapportrecensement', component: RapportRecensement, props: true},
    {path: '/profil', component: Profil, props: true},
    {path: '/addrecensement', component: AddRecensement, props: true},
    {path: '/addcatrecensement', component: AddCatRecensement, props: true},
    {path: '/addagent', component: AddAgent, props: true},
  ],
})

export default router